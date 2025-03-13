import { useState } from "react";
import {
  __experimentalVStack as VStack,
  __experimentalText as Text,
  __experimentalHeading as Heading,
  privateApis,
} from "@wordpress/components";
import { DataViews, Field, View } from "@wordpress/dataviews";
import { unlock } from "../lock-unlock";
const { Badge } = unlock(privateApis);
interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  date: string;
}

const PaymentsPreview = () => {
  const [view, setView] = useState<View>({
    type: "table",
    titleField: "id",
    fields: ["id", "amount", "status", "date"],
  });

  // Sample payments data
  const payments: Payment[] = [
    {
      id: "INV001",
      amount: 316.0,
      status: "pending",
      email: "olivia.martin@example.com",
      date: "2023-01-15",
    },
    {
      id: "INV002",
      amount: 242.0,
      status: "processing",
      email: "jackson.lee@example.com",
      date: "2023-01-20",
    },
    {
      id: "INV003",
      amount: 837.5,
      status: "success",
      email: "isabella.nguyen@example.com",
      date: "2023-01-23",
    },
    {
      id: "INV004",
      amount: 145.2,
      status: "failed",
      email: "william.chen@example.com",
      date: "2023-01-25",
    },
    {
      id: "INV005",
      amount: 520.0,
      status: "success",
      email: "sofia.rodriguez@example.com",
      date: "2023-01-28",
    },
  ];

  // Define columns for the DataViews table
  const fields: Field<Payment>[] = [
    {
      id: "id",
      label: "Invoice",
      render: ({ item }) => <Text size="small">{item.id}</Text>,
    },
    {
      id: "amount",
      label: "Amount",
      render: ({ item }) => <Text size="small">${item.amount.toFixed(2)}</Text>,
    },
    {
      id: "status",
      label: "Status",
      render: ({ item }) => {
        const statusIntents = {
          pending: "default",
          processing: "info",
          success: "success",
          failed: "error",
        };
        return (
          <Badge intent={statusIntents[item.status]}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </Badge>
        );
      },
      elements: [
        { value: "pending", label: "Pending" },
        { value: "processing", label: "Processing" },
        { value: "success", label: "Success" },
        { value: "failed", label: "Failed" },
      ],
    },
    {
      id: "email",
      label: "Email",
      render: ({ item }) => <Text size="small">{item.email}</Text>,
    },
    {
      id: "date",
      label: "Date",
      render: ({ item }) => {
        const date = new Date(item.date);
        return <Text size="small">{date.toLocaleDateString()}</Text>;
      },
    },
  ];

  return (
    <VStack spacing={4}>
      <VStack spacing={2}>
        <Heading level={2} size="title">
          Payments
        </Heading>
        <Text size="body">Manage your payments (using DataViews)</Text>
      </VStack>

      <DataViews
        data={payments}
        fields={fields}
        view={view}
        onChangeView={setView}
        paginationInfo={{
          totalItems: 5,
          totalPages: 1,
        }}
        defaultLayouts={{
          table: {},
        }}
      />
    </VStack>
  );
};

export default PaymentsPreview;
