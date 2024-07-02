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
} from "@react-email/components";

type XersTemplateProps = {
  firstName: string;
};

const socialMediaIcons = [
  {
    to: "https://www.google.com/",
    icon: "https://i.ibb.co/hBGGWn4/Facebook.png",
  },
  {
    to: "https://www.google.com/",
    icon: "https://i.ibb.co/Tq7KCdP/Whatsapp.png",
  },
  {
    to: "https://www.google.com/",
    icon: "https://i.ibb.co/fMh5JdN/Linkedin.png",
  },
  {
    to: "https://www.google.com/",
    icon: "https://i.ibb.co/fDk99GM/Telegram.png",
  },
  {
    to: "https://www.google.com/",
    icon: "https://i.ibb.co/K5FyTk9/Gmail.pngg",
  },
];

export default function XersEmailTemplate({ firstName }: XersTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>AWS Email Verification</Preview>
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
                A Submission
                <br /> Has Been Received!
              </Heading>
            </Section>
            <Section style={bodyWrapper}>
              <Text style={text}>Yaung Hein</Text>
              <Text
                style={{ ...text, marginTop: "-5px", marginBottom: "15px" }}
              >
                yan@thesandstudio.com
              </Text>
              <Text style={{ ...text, marginBottom: "80px" }}>
                To track clicks, Resend modifies each link in the body of the
                HTML email. When recipients open a link, they are sent to a
                Resend server, and are immediately redirected to the URL
                destination.
              </Text>

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
  backgroundColor: "#000",
  color: "#fff",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  background:
    "url('https://i.ibb.co/QCJLM9k/email-bg.png') no-repeat center top / cover",
};

const content = {
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  borderRadius: "24px",
  backdropFilter: "blur(15px)",
};

const wrapper = { padding: "35px 35px" };

const bodyWrapper = { padding: "0px 35px 35px 35px" };

const h1 = {
  color: "#fff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#fff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "0px",
  marginBottom: "4px",
};

const socialMedia = {
  display: "inline-block",
  marginLeft: "-10px",
  marginRight: "24px",
  opacity: 0.5,
};
