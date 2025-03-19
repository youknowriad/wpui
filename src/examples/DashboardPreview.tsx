import { useState } from "react";
import {
  __experimentalHeading as Heading,
  __experimentalVStack as VStack,
  __experimentalHStack as HStack,
  __experimentalText as Text,
  Card,
  CardBody,
  CardHeader,
  Button,
  DropdownMenu,
  privateApis,
  SearchControl,
  SelectControl,
} from "@wordpress/components";
import { Action, DataViews, Field, View } from "@wordpress/dataviews";
import {
  plus,
  download,
  help,
  settings,
  moreVertical,
  lock,
  commentAuthorAvatar,
} from "@wordpress/icons";
import { Bar, Line } from "react-chartjs-2";
import { unlock } from "../lock-unlock";
const { Badge } = unlock(privateApis);

// Sample data for the charts
const barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: "#3858e9",
    },
  ],
};

const lineChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3, 9],
      borderColor: "#3858e9",
      fill: false,
    },
  ],
};

// Avatar component
function Avatar({
  name,
  src,
  size = 32,
}: {
  name: string;
  src: string;
  size?: number;
}) {
  return (
    <img
      src={src}
      alt={name}
      style={{
        borderRadius: "50%",
        width: size,
      }}
    />
  );
}

// Purchase data interface
interface Purchase {
  id: string;
  clientName: string;
  clientEmail: string;
  clientAvatar: string;
  date: string;
  amount: number;
}

export default function DashboardPreview() {
  const currentUser = {
    name: "Ryan Reynolds",
    email: "ryan@example.com",
    role: "Admin",
    avatar: "https://i.pravatar.cc/150?img=1",
  };
  const users = [
    { label: "Ryan Reynolds", value: "ryan" },
    { label: "Emma Watson", value: "emma" },
    { label: "John Doe", value: "john" },
  ];

  // Data for recent purchases
  const recentPurchases: Purchase[] = [
    {
      id: "PUR001",
      clientName: "Sophia Williams",
      clientEmail: "sophia.w@example.com",
      clientAvatar: "https://i.pravatar.cc/150?img=5",
      date: "2023-06-15",
      amount: 239.99,
    },
    {
      id: "PUR002",
      clientName: "Ethan Brown",
      clientEmail: "ethan.brown@example.com",
      clientAvatar: "https://i.pravatar.cc/150?img=12",
      date: "2023-06-14",
      amount: 129.5,
    },
    {
      id: "PUR003",
      clientName: "Olivia Martinez",
      clientEmail: "olivia.m@example.com",
      clientAvatar: "https://i.pravatar.cc/150?img=23",
      date: "2023-06-12",
      amount: 345.8,
    },
    {
      id: "PUR004",
      clientName: "Noah Thompson",
      clientEmail: "noah.t@example.com",
      clientAvatar: "https://i.pravatar.cc/150?img=33",
      date: "2023-06-10",
      amount: 78.25,
    },
    {
      id: "PUR005",
      clientName: "Ava Johnson",
      clientEmail: "ava.j@example.com",
      clientAvatar: "https://i.pravatar.cc/150?img=13",
      date: "2023-06-08",
      amount: 199.99,
    },
  ];

  // DataViews setup for recent purchases
  const [purchasesView, setPurchasesView] = useState<View>({
    type: "table",
    mediaField: "media",
    titleField: "title",
    descriptionField: "description",
    fields: ["date", "amount"],
  });

  // Define fields for the purchases DataViews
  const purchaseFields: Field<Purchase>[] = [
    {
      id: "media",
      label: "",
      render: ({ item }) => (
        <Avatar name={item.clientName} src={item.clientAvatar} size={40} />
      ),
    },
    {
      id: "title",
      label: "Client",
      getValue: ({ item }) => item.clientName,
    },
    {
      id: "description",
      label: "Email",
      getValue: ({ item }) => item.clientEmail,
    },
    {
      id: "date",
      label: "Date",
      render: ({ item }) => {
        const date = new Date(item.date);
        return (
          <Text size="small">
            {date.toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
        );
      },
    },
    {
      id: "amount",
      label: "Amount",
      render: ({ item }) => (
        <Text size="title">+${item.amount.toFixed(2)}</Text>
      ),
    },
  ];

  const actions: Action<Purchase>[] = [
    {
      id: "view",
      label: "View",
      callback: () => {},
    },
  ];

  return (
    <VStack spacing={0}>
      <HStack
        spacing={4}
        style={{
          padding: "16px",
          borderBottom: "1px solid #e0e0e0",
        }}
        alignment="center"
      >
        <Button style={{ fontWeight: "bold" }}>WPUI</Button>

        <HStack style={{ flexShrink: 0, width: "auto" }}>
          <SelectControl
            label="Switch user"
            hideLabelFromVision
            onChange={() => {}}
            options={users}
            __nextHasNoMarginBottom
            __next40pxDefaultSize
          />
        </HStack>

        <HStack justify="flex-start" style={{ flexGrow: 1 }}>
          <Button variant="tertiary" onClick={() => {}}>
            Overview
          </Button>
          <Button variant="tertiary" onClick={() => {}}>
            Analytics
          </Button>
          <Button variant="tertiary" onClick={() => {}}>
            Team
          </Button>
          <Button variant="tertiary" onClick={() => {}}>
            Calendar
          </Button>
          <Button variant="tertiary" onClick={() => {}}>
            Settings
          </Button>
        </HStack>

        <HStack style={{ flexShrink: 0, width: "auto" }}>
          <SearchControl onChange={() => {}} __nextHasNoMarginBottom />
        </HStack>

        <DropdownMenu
          style={{ flexShrink: 0 }}
          label="User menu"
          icon={<Avatar name={currentUser.name} src={currentUser.avatar} />}
          controls={[
            [
              {
                // @ts-expect-error - This is a custom control
                title: (
                  <HStack
                    spacing={3}
                    alignment="center"
                    style={{ padding: "8px 12px" }}
                  >
                    <Avatar name={currentUser.name} src={currentUser.avatar} />
                    <VStack spacing={0}>
                      <Text size="subtitle">{currentUser.name}</Text>
                      <Text variant="muted" style={{ fontSize: "13px" }}>
                        {currentUser.email}
                      </Text>
                    </VStack>
                  </HStack>
                ),
                onClick: () => {},
              },
            ],
            [
              {
                title: "Profile",
                icon: commentAuthorAvatar,
                onClick: () => {},
              },
              {
                title: "Settings",
                icon: settings,
                onClick: () => {},
              },
              {
                title: "Support",
                icon: help,
                onClick: () => {},
              },
            ],
            [
              {
                title: "Log out",
                icon: lock,
                onClick: () => {},
              },
            ],
          ]}
        />
      </HStack>

      {/* Main content */}
      <VStack spacing={4} style={{ padding: "16px" }}>
        <HStack justify="space-between" alignment="center">
          <Heading level={1} size="largeTitle">Dashboard</Heading>
          <HStack justify="flex-end" spacing={2}>
            <Button icon={download} variant="secondary" __next40pxDefaultSize>
              Download
            </Button>
            <Button icon={plus} __next40pxDefaultSize variant="primary">
              Add Widget
            </Button>
          </HStack>
        </HStack>

        {/* Overview stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <StatCard
            title="Total Visitors"
            value="4,223"
            change="+12.5%"
            isPositive={true}
            description="Since last month"
          />
          <StatCard
            title="New Users"
            value="689"
            change="+8.2%"
            isPositive={true}
            description="Since last month"
          />
          <StatCard
            title="Bounce Rate"
            value="27.3%"
            change="-3.1%"
            isPositive={true}
            description="Since last month"
          />
          <StatCard
            title="Avg. Session"
            value="2m 56s"
            change="-0.5%"
            isPositive={false}
            description="Since last month"
          />
        </div>

        {/* Charts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <Card>
            <CardHeader>
              <HStack spacing={2} justify="space-between">
                <Text as="h2">Monthly Traffic</Text>
                <DropdownMenu
                  icon={moreVertical}
                  label="More options"
                  controls={[
                    {
                      title: "Download CSV",
                      onClick: () => {},
                    },
                    {
                      title: "Edit widget",
                      onClick: () => {},
                    },
                    {
                      title: "Remove widget",
                      onClick: () => {},
                    },
                  ]}
                />
              </HStack>
            </CardHeader>
            <CardBody>
              <Bar
                data={barChartData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                width={400}
                height={200}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <HStack spacing={2} justify="space-between">
                <Text as="h2">Weekly Activity</Text>
                <DropdownMenu
                  icon={moreVertical}
                  label="More options"
                  controls={[
                    {
                      title: "Download CSV",
                      onClick: () => {},
                    },
                    {
                      title: "Edit widget",
                      onClick: () => {},
                    },
                    {
                      title: "Remove widget",
                      onClick: () => {},
                    },
                  ]}
                />
              </HStack>
            </CardHeader>
            <CardBody>
              <Line
                data={lineChartData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                width={400}
                height={200}
              />
            </CardBody>
          </Card>
        </div>

        {/* Recent purchases */}
        <Card>
          <CardHeader>
            <HStack spacing={2} justify="space-between">
              <Text as="h2">Recent Purchases</Text>
              <DropdownMenu
                icon={moreVertical}
                label="More options"
                controls={[
                  {
                    title: "Download CSV",
                    onClick: () => {},
                  },
                  {
                    title: "View all",
                    onClick: () => {},
                  },
                ]}
              />
            </HStack>
          </CardHeader>
          <CardBody style={{ padding: 0 }}>
            <DataViews
              data={recentPurchases}
              fields={purchaseFields}
              view={purchasesView}
              actions={actions}
              onChangeView={setPurchasesView}
              paginationInfo={{
                totalItems: recentPurchases.length,
                totalPages: 1,
              }}
              defaultLayouts={{
                table: {},
              }}
            />
          </CardBody>
        </Card>
      </VStack>
    </VStack>
  );
}

// Helper components
function StatCard({
  title,
  description,
  value,
  change,
  isPositive,
}: {
  title: string;
  description: string;
  value: string;
  change: string;
  isPositive: boolean;
}) {
  return (
    <Card>
      <CardBody>
        <VStack spacing={4}>
          <Text as="h2">{title}</Text>
          <VStack spacing={0}>
            <HStack spacing={2} justify="flex-start">
              <Text size="title">{value}</Text>
              <Badge intent={isPositive ? "success" : "error"}>{change}</Badge>
            </HStack>
            <Text variant="muted" size="caption">
              {description}
            </Text>
          </VStack>
        </VStack>
      </CardBody>
    </Card>
  );
}
