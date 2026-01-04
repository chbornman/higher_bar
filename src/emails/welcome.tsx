import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  email: string;
}

export default function WelcomeEmail({ email }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Higher Bar - Lecture Series</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={logo}>Higher Bar</Heading>
            <Text style={tagline}>Lecture Series</Text>
          </Section>

          <Hr style={hr} />

          {/* Main Content */}
          <Section style={content}>
            <Heading style={heading}>You're on the list!</Heading>

            <Text style={paragraph}>
              Thanks for signing up for Higher Bar updates. We're building something
              different here—a space where local academics share their expertise in a
              relaxed setting, followed by real conversation.
            </Text>

            <Text style={paragraph}>
              Each event features:
            </Text>

            <Text style={listItem}>→ 45 minutes of accessible, substantive presentation</Text>
            <Text style={listItem}>→ 45 minutes of genuine dialogue and Q&A</Text>
            <Text style={listItem}>→ Beers (optional but encouraged)</Text>

            <Text style={paragraph}>
              We'll reach out when we have our first event scheduled. In the meantime,
              if you know a local expert who should be presenting—or if that expert is
              you—reply to this email.
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Higher Bar Lecture Series
            </Text>
            <Text style={footerText}>
              Lancaster, PA
            </Text>
            <Text style={footerMuted}>
              Sent to {email}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#2a2a2a",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "560px",
};

const header = {
  textAlign: "center" as const,
  padding: "20px 0",
};

const logo = {
  color: "#7ab89a",
  fontSize: "32px",
  fontWeight: "700",
  fontStyle: "italic",
  margin: "0",
};

const tagline = {
  color: "#888888",
  fontSize: "14px",
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  margin: "8px 0 0 0",
};

const hr = {
  borderColor: "#3a3a3a",
  margin: "20px 0",
};

const content = {
  padding: "20px 0",
};

const heading = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0 0 20px 0",
};

const paragraph = {
  color: "#cccccc",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
};

const listItem = {
  color: "#cccccc",
  fontSize: "15px",
  lineHeight: "1.8",
  margin: "0 0 8px 0",
  paddingLeft: "8px",
};

const footer = {
  textAlign: "center" as const,
  padding: "20px 0",
};

const footerText = {
  color: "#888888",
  fontSize: "14px",
  margin: "0 0 4px 0",
};

const footerMuted = {
  color: "#666666",
  fontSize: "12px",
  margin: "16px 0 0 0",
};
