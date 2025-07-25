import { Button } from '../../components/button';
import { DecoderText } from '../../components/decoder-text';
import { Divider } from '../../components/divider';
import { Footer } from '../../components/footer';
import { Heading } from '../../components/heading';
import { Icon } from '../../components/icon';
import { Input } from '../../components/input';
import { Section } from '../../components/section';
import { Text } from '../../components/text';
import { tokens } from '../../components/theme-provider/theme';
import { Transition } from '../../components/transition';
import { useFormInput } from '../../hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from '../../utils/style';
import { baseMeta } from '../../utils/meta';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { json } from '@remix-run/cloudflare';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import Lottie from 'lottie-react';
import successAnim from '../../assets/success.json';
import styles from './contact.module.css';


export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: 'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const res = await fetch('http://localhost:3001/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success'); // ✅ Show Lottie + message
      } else {
        setStatus('error');
        alert('❌ Message failed to send.');
      }
    } catch (err) {
      setStatus('error');
      alert('⚠️ Network error. Please try again.');
      console.error(err);
    }
  };

  const sending = status === 'sending';

  return (
    <Section className={styles.contact}>
      <Transition unmount in={status !== 'success'} timeout={1600}>
        {({ status: tStatus, nodeRef }) => (
          <form onSubmit={handleSubmit} className={styles.form} ref={nodeRef}>
            <Heading
              className={styles.title}
              data-status={tStatus}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={tStatus !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={tStatus}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Input
              className={styles.botkiller}
              label="Name"
              name="name"
              maxLength={MAX_EMAIL_LENGTH}
            />
            <Input
              required
              className={styles.input}
              data-status={tStatus}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your email"
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={tStatus}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />
            <Transition
              unmount
              in={!sending && status === 'error'}
              timeout={msToNum(tokens.base.durationM)}
            >
              {({ status: errorStatus, nodeRef }) => (
                <div
                  className={styles.formError}
                  ref={nodeRef}
                  data-status={errorStatus}
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      Something went wrong. Please try again.
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={tStatus}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>
          </form>
        )}
      </Transition>

      <Transition unmount in={status === 'success'}>
        {({ status: tStatus, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Lottie
              animationData={successAnim}
              loop={false}
              autoplay
              style={{ width: 300, height: 300, margin: '0 auto' }}
            />
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={tStatus}
            >
              Message Sent!
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={tStatus}
              style={getDelay(tokens.base.durationXS)}
            >
              I’ll get back to you within a couple days. Sit tight!
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={tStatus}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>

      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
