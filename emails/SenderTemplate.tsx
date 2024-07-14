import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

type XersTemplateProps = {
  name: string;
  email: string;
  message: string;
};

const socialMediaIcons = [
  {
    to: 'https://www.google.com/',
    icon: 'https://i.ibb.co/hBGGWn4/Facebook.png',
  },
  {
    to: 'https://www.google.com/',
    icon: 'https://i.ibb.co/Tq7KCdP/Whatsapp.png',
  },
  {
    to: 'https://www.google.com/',
    icon: 'https://i.ibb.co/fMh5JdN/Linkedin.png',
  },
  {
    to: 'https://www.google.com/',
    icon: 'https://i.ibb.co/fDk99GM/Telegram.png',
  },
  {
    to: 'https://www.google.com/',
    icon: 'https://i.ibb.co/K5FyTk9/Gmail.pngg',
  },
];

export default function XersEmailTemplate({
  name,
  email,
  message,
}: XersTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>{message}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Section style={wrapper}>
              <Img
                src="https://i.ibb.co/2vKfCZf/logo.jpg"
                width="56"
                height="32"
                alt="Xers Logo"
              />
              <Heading style={h1}>
                Hi {name.split(' ')[0]},
                <br />
                Your Submission
                <br />
                Has Been Received!
              </Heading>
            </Section>
            <Section style={bodyWrapper}>
              <Text style={text}>{name}</Text>
              <Text
                style={{ ...text, marginTop: '-5px', marginBottom: '15px' }}
              >
                {email}
              </Text>
              <Text style={{ ...text, marginBottom: '80px' }}>{message}</Text>

              {socialMediaIcons.map((image, index) => (
                <Link href={image.to} key={index}>
                  <Img
                    src={image.icon}
                    alt="Amazon Social Midia"
                    width="30"
                    height="30"
                    style={socialMedia}
                  />
                </Link>
              ))}
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  color: '#000',
};

const container = {
  padding: '20px',
  margin: '0 auto',
  background:
    "url('https://i.ibb.co/47kTRXT/email-bg-2.png') no-repeat center top / cover",
};

const content = {};

const wrapper = { padding: '35px 35px 0px 35px' };

const bodyWrapper = { padding: '0px 35px 35px 35px' };

const h1 = {
  color: '#000',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#000',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '0px',
  marginBottom: '4px',
};

const socialMedia = {
  display: 'inline-block',
  marginRight: '16px',
  background: '#3E8DFF',
};
