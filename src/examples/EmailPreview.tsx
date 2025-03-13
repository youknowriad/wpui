import {
  __experimentalText as Text,
  __experimentalTruncate as Truncate,
  __experimentalHStack as HStack,
  __experimentalVStack as VStack,
  Button,
  Card,
  Icon,
  CardBody,
  SelectControl,
  __experimentalHeading as Heading,
  TextareaControl,
} from "@wordpress/components";
import {
  starFilled,
  starEmpty,
  moreVertical,
  archive,
  trash,
  inbox,
  drafts,
  send,
  warning,
  archive as archiveIcon,
  people,
  chevronDown,
  chevronUp,
  close,
  commentReplyLink,
} from "@wordpress/icons";
import { MouseEvent, useState } from "react";

const EmailPreview = () => {
  const [selectedFolder, setSelectedFolder] = useState("inbox");
  const [selectedLabel, setSelectedLabel] = useState("personal");
  const [selectedEmail, setSelectedEmail] = useState(2);
  const [emails, setEmails] = useState([
    {
      id: 1,
      starred: true,
      sender: "Acme Inc.",
      email: "support@acmeinc.com",
      subject: "Your order has been processed",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, nisl quam aliquet nunc, eget aliquam velit nisl quis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at magna euismod, commodo ante nec, iaculis ipsum.\n\nNulla facilisi. Sed ut turpis quis augue varius sollicitudin. Proin nec faucibus turpis. Suspendisse vitae molestie dui. Curabitur blandit mauris at dui fermentum, in tempor libero maximus. Vivamus hendrerit quam at lorem lacinia, eget molestie arcu cursus. Phasellus at feugiat tortor, id viverra est.",
      date: "2:30 PM",
      read: true,
    },
    {
      id: 2,
      starred: false,
      sender: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      subject: "Design feedback needed",
      message:
        "Hi there!\n\nI've looked at the latest mockups and I have some thoughts I'd like to share with you. Can we schedule a quick call tomorrow?\n\nThe homepage layout looks great, but I'm wondering if we should adjust the spacing between sections. Also, the color palette feels a bit too muted for our brand - perhaps we can introduce one more accent color to make key elements pop?\n\nFor the product pages, I really like the new card layout. It's much cleaner and focuses attention on the product images. The description text might be a bit small though - we should consider increasing the font size slightly for better readability.\n\nLet me know what you think about these suggestions, and when you're available to discuss.\n\nBest regards,\nSarah",
      date: "12:42 PM",
      read: false,
    },
    {
      id: 3,
      starred: false,
      sender: "Jason Cooper",
      email: "jason.cooper@email.com",
      subject: "Update on quarterly goals",
      message:
        "Team,\n\nI wanted to share our progress on the quarterly objectives. We're tracking well on most fronts, but there are a couple areas we should discuss in our next meeting.\n\nHere's a quick summary:\n\n1. Revenue targets: Currently at 92% of goal - we're on track to meet or exceed by end of quarter\n2. New customer acquisition: Exceeded target by 7% - great job to the sales team!\n3. Product development: The new feature rollout is delayed by two weeks - we'll need to adjust our timeline\n4. Customer satisfaction: Scores have improved 4 points since last quarter\n\nPlease come prepared to discuss these items in detail during our weekly sync on Thursday.\n\nRegards,\nJason",
      date: "Yesterday",
      read: true,
    },
    {
      id: 4,
      starred: true,
      sender: "Marketing Team",
      email: "marketing@company.com",
      subject: "Campaign performance report",
      message:
        "Hello everyone,\n\nThe latest campaign metrics are now available. Open rates are up 12% compared to our previous campaign, and click-through rates have improved significantly.\n\nKey metrics:\n- Email opens: 42% (up from 30%)\n- Click-through rate: 8.5% (up from 6.2%)\n- Conversion rate: 3.2% (up from 2.8%)\n\nThe A/B test results showed that version B with the more direct subject line performed 15% better overall. We'll incorporate these learnings into the next campaign.\n\nFull details are available in the attached report.\n\nRegards,\nMarketing Team",
      date: "Yesterday",
      read: true,
    },
    {
      id: 5,
      starred: false,
      sender: "Alex Rivera",
      email: "alex.rivera@email.com",
      subject: "New project kickoff",
      message:
        "Hi team,\n\nWe're planning to kickoff the new project next Monday. Please review the attached brief and let me know if you have any questions or concerns before our initial meeting.\n\nThe project timeline is aggressive but achievable if we stay focused on the core requirements. I've outlined the major milestones in the project plan, with the first deliverable due in three weeks.\n\nPlease confirm your availability for the kickoff meeting on Monday at 10:00 AM.\n\nLooking forward to working with you all on this exciting new initiative!\n\nBest,\nAlex",
      date: "Jun 24",
      read: false,
    },
  ]);

  const users = [
    { label: "Ryan Reynolds", value: "ryan" },
    { label: "Emma Watson", value: "emma" },
    { label: "John Doe", value: "john" },
  ];

  const folders = [
    { id: 1, name: "Inbox", icon: inbox },
    { id: 2, name: "Drafts", icon: drafts },
    { id: 3, name: "Sent", icon: send },
    { id: 4, name: "Junk", icon: warning },
    { id: 5, name: "Trash", icon: trash },
  ];

  const labels = [
    { id: 1, name: "Personal" },
    { id: 2, name: "Work" },
    { id: 3, name: "Important" },
  ];

  const [selectedUser, setSelectedUser] = useState("ryan");

  const [showAccounts, setShowAccounts] = useState(false);

  const toggleStar = (id: number) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, starred: !email.starred } : email
      )
    );
  };

  const markAsRead = (id: number) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, read: true } : email
      )
    );
  };

  const selectedEmailData = emails.find((email) => email.id === selectedEmail);

  return (
    <HStack spacing={0} alignment="stretch">
      {/* Sidebar */}
      <VStack
        justify="flex-start"
        spacing={0}
        style={{
          width: "300px",
          borderRight: "1px solid #e5e7eb",
          flexShrink: 0,
        }}
      >
        {/* User Switcher */}
        <VStack
          style={{
            borderBottom: "1px solid #e5e7eb",
            padding: "16px",
          }}
        >
          <SelectControl
            label="Switch agent"
            hideLabelFromVision
            value={selectedUser}
            onChange={setSelectedUser}
            options={users}
            __nextHasNoMarginBottom
            size="compact"
          />
        </VStack>

        {/* New Email button */}
        <VStack
          spacing={4}
          style={{ padding: "16px", borderBottom: "1px solid #e5e7eb" }}
        >
          <Button variant="primary" __next40pxDefaultSize onClick={() => {}}>
            New message
          </Button>

          {/* Folders */}
          <VStack spacing={4}>
            <Text
              size="11"
              weight="600"
              variant="muted"
              style={{
                textTransform: "uppercase",
                paddingLeft: "12px",
              }}
            >
              Folders
            </Text>

            <VStack spacing={0}>
              {folders.map((folder) => (
                <Button
                  key={folder.id}
                  variant="tertiary"
                  __next40pxDefaultSize
                  onClick={() => setSelectedFolder(folder.name)}
                  style={{
                    fontWeight:
                      selectedFolder === folder.name ? "600" : "normal",
                  }}
                >
                  <HStack justify="flex-start">
                    <Icon icon={folder.icon} style={{ fill: "inherit" }} />
                    <Text size="13">{folder.name}</Text>
                  </HStack>
                </Button>
              ))}
            </VStack>
          </VStack>
        </VStack>

        {/* Labels section */}

        <VStack
          spacing={4}
          style={{ padding: "16px", borderBottom: "1px solid #e5e7eb" }}
        >
          <Text
            size="11"
            weight="600"
            variant="muted"
            style={{
              textTransform: "uppercase",
              paddingLeft: "12px",
            }}
          >
            Labels
          </Text>

          <VStack spacing={0}>
            {labels.map((label) => (
              <Button
                key={label.id}
                variant="tertiary"
                __next40pxDefaultSize
                onClick={() => setSelectedLabel(label.name)}
                style={{
                  fontWeight: selectedLabel === label.name ? "600" : "normal",
                }}
              >
                <Text size="13">{label.name}</Text>
              </Button>
            ))}
          </VStack>
        </VStack>

        {/* Accounts section */}
        <VStack spacing={4} style={{ padding: "16px" }}>
          <Button
            variant="tertiary"
            onClick={() => setShowAccounts(!showAccounts)}
            icon={showAccounts ? chevronDown : chevronUp}
            iconPosition="right"
            __next40pxDefaultSize
          >
            <HStack spacing={2} justify="flex-start">
              <Icon icon={people} />
              <Text>Accounts</Text>
            </HStack>
          </Button>

          {showAccounts && (
            <VStack spacing={1}>
              <Button variant="tertiary" size="compact">
                <Text>Personal</Text>
              </Button>
              <Button variant="tertiary" size="compact">
                <Text>Work</Text>
              </Button>
            </VStack>
          )}
        </VStack>
      </VStack>

      {/* Email list */}
      <VStack
        justify="flex-start"
        spacing={0}
        style={{
          width: "400px",
          borderRight: "1px solid #e5e7eb",
          flexShrink: 0,
        }}
      >
        <HStack
          style={{
            padding: "16px",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <Text size="body">Inbox</Text>
          <HStack spacing={2}>
            <Button
              icon={archive}
              variant="tertiary"
              label="Archive"
              size="compact"
            />
            <Button
              icon={trash}
              variant="tertiary"
              label="Delete"
              size="compact"
            />
          </HStack>
        </HStack>

        <VStack spacing={0}>
          {emails.map((email) => (
            <Card
              key={email.id}
              size="small"
              elevation={0}
              style={{
                borderRadius: 0,
                borderBottom: "1px solid #e5e7eb",
                backgroundColor:
                  selectedEmail === email.id
                    ? "#f3f4f6"
                    : email.read
                    ? "transparent"
                    : "#f9fafb",
              }}
              onClick={() => {
                setSelectedEmail(email.id);
                markAsRead(email.id);
              }}
              isBorderless
            >
              <CardBody style={{ padding: "16px" }}>
                <HStack spacing={3}>
                  <Button
                    label={`Star email: ${email.subject}`}
                    icon={email.starred ? starFilled : starEmpty}
                    variant="tertiary"
                    size="small"
                    onClick={(e: MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation();
                      toggleStar(email.id);
                    }}
                    style={{ color: email.starred ? "#f59e0b" : "inherit" }}
                  />

                  <VStack spacing={1} style={{ flexGrow: 1 }}>
                    <HStack>
                      <Text weight={email.read ? "400" : "600"}>
                        {email.sender}
                      </Text>
                      <Text size="caption" variant="muted">
                        {email.date}
                      </Text>
                    </HStack>

                    <Text weight={email.read ? "400" : "600"}>
                      {email.subject}
                    </Text>

                    <Text size="small" variant="muted">
                      <Truncate numberOfLines={1}>{email.message}</Truncate>
                    </Text>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>
          ))}
        </VStack>
      </VStack>

      {/* Email viewing pane */}
      {selectedEmailData && (
        <VStack
          spacing={0}
          justify="flex-start"
          style={{ flexGrow: 1, minHeight: "600px" }}
        >
          <HStack
            style={{
              padding: "16px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <HStack alignment="left" style={{ flexGrow: 1 }}>
              <Button
                icon={archiveIcon}
                variant="tertiary"
                label="Archive"
                size="compact"
              />
              <Button
                icon={trash}
                variant="tertiary"
                label="Delete"
                size="compact"
              />
              <Button
                icon={close}
                variant="tertiary"
                label="Spam"
                size="compact"
              />
            </HStack>
            <Button
              icon={moreVertical}
              variant="tertiary"
              label="More"
              size="compact"
            />
          </HStack>

          <HStack
            style={{
              padding: "16px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <img
              src={`https://i.pravatar.cc/150?img=${emails.indexOf(
                selectedEmailData
              )}`}
              alt={selectedEmailData.sender}
              style={{
                borderRadius: "50%",
                width: 40,
                height: 40,
              }}
            />

            <VStack spacing={0} style={{ flexGrow: 1 }}>
              <Text>{selectedEmailData.sender}</Text>
              <Text size="small" variant="muted">
                {selectedEmailData.email}
              </Text>
            </VStack>

            <VStack spacing={2} alignment="right">
              <Text size="small" variant="muted">
                {selectedEmailData.date}
              </Text>
              <Button
                label={`Star email: ${selectedEmailData.subject}`}
                icon={selectedEmailData.starred ? starFilled : starEmpty}
                variant="tertiary"
                size="small"
                onClick={() => toggleStar(selectedEmailData.id)}
                style={{
                  color: selectedEmailData.starred ? "#f59e0b" : "inherit",
                }}
              />
            </VStack>
          </HStack>

          <VStack
            spacing={4}
            style={{ padding: "16px", borderBottom: "1px solid #e5e7eb" }}
          >
            <Heading level={2} size="title">
              {selectedEmailData.subject}
            </Heading>

            <Text
              size="inherit"
              lineHeight={1.6}
              style={{
                whiteSpace: "pre-line",
              }}
            >
              {selectedEmailData.message}
            </Text>
          </VStack>

          <VStack
            style={{
              padding: "16px",
            }}
          >
            <TextareaControl
              value=""
              placeholder="Reply..."
              onChange={() => {}}
              __nextHasNoMarginBottom
            />
            <HStack alignment="right">
              <Button
                variant="primary"
                icon={commentReplyLink}
                __next40pxDefaultSize
              >
                Send
              </Button>
            </HStack>
          </VStack>
        </VStack>
      )}
    </HStack>
  );
};

export default EmailPreview;
