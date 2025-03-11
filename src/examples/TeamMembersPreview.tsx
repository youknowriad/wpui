import {
  __experimentalText as Text,
  __experimentalHStack as HStack,
  __experimentalVStack as VStack,
  Button,
} from "@wordpress/components";
import { edit } from "@wordpress/icons";

const TeamMembersPreview = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatar: "https://i.pravatar.cc/150?img=1",
      role: "Product Manager",
    },
    {
      id: 2,
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      avatar: "https://i.pravatar.cc/150?img=2",
      role: "Software Engineer",
    },
    {
      id: 3,
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      avatar: "https://i.pravatar.cc/150?img=3",
      role: "UI/UX Designer",
    },
    {
      id: 4,
      name: "William Chen",
      email: "william.chen@email.com",
      avatar: "https://i.pravatar.cc/150?img=4",
      role: "Marketing Lead",
    },
    {
      id: 5,
      name: "Sofia Rodriguez",
      email: "sofia.rodriguez@email.com",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "Content Strategist",
    },
  ];

  return (
    <VStack spacing={4}>
      <HStack
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text size="title">Team Members</Text>
        <Button variant="primary" __next40pxDefaultSize>
          Add Member
        </Button>
      </HStack>

      <VStack spacing={4}>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            style={{
              padding: "12px 0",
              borderBottom:
                member.id !== teamMembers.length ? "1px solid #e5e7eb" : "none",
            }}
          >
            <HStack spacing={4} justify="flex-start" alignment="top">
              <img
                src={member.avatar}
                alt={member.name}
                style={{
                  borderRadius: "50%",
                  width: 60,
                }}
              />
              <VStack spacing={1} style={{ flexGrow: 1 }}>
                <Text size="body">{member.name}</Text>
                <Text size="small" style={{ color: "#6b7280" }}>
                  {member.role}
                </Text>
                <Text size="caption" style={{ color: "#6b7280" }}>
                  {member.email}
                </Text>
              </VStack>
              <Button
                variant="tertiary"
                icon={edit}
                label="Edit"
                size="small"
              />
            </HStack>
          </div>
        ))}
      </VStack>
    </VStack>
  );
};

export default TeamMembersPreview;
