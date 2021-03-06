export const tablesArray = [
  {
    id: 1,
    schema: "public",
    table: "users",
    columns: [
      {
        name: "id",
        type: "INTEGER",
      },
      {
        name: "created_at",
        type: "TIMESTAMP",
      },
      {
        name: "first_name",
        type: "STRING",
      },
      {
        name: "last_name",
        type: "STRING",
      },
    ],
  },
  {
    id: 2,
    schema: "public",
    table: "payments",
    columns: [
      {
        name: "id",
        type: "INTEGER",
      },
      {
        name: "created_at",
        type: "TIMESTAMP",
      },
      {
        name: "amount",
        type: "DOUBLE",
      },
      {
        name: "product_name",
        type: "STRING",
      },
    ],
  },
  {
    id: 3,
    schema: "public",
    table: "web_logs",
    columns: [
      {
        name: "id",
        type: "INTEGER",
      },
      {
        name: "created_at",
        type: "TIMESTAMP",
      },
      {
        name: "ip_address",
        type: "STRING",
      },
      {
        name: "user_id",
        type: "INTEGER",
      },
    ],
  },
  {
    id: 4,
    schema: "etl",
    table: "analytics_web",
    columns: [
      {
        name: "week",
        type: "TIMESTAMP",
      },
      {
        name: "page_name",
        type: "STRING",
      },
      {
        name: "page_views",
        type: "INTEGER",
      },
    ],
  },
  {
    id: 5,
    schema: "etl",
    table: "analytics_payments",
    columns: [
      {
        name: "payment_date",
        type: "DATE",
      },
      {
        name: "product_name",
        type: "STRING",
      },
      {
        name: "subtotal",
        type: "DOUBLE",
      },
      {
        name: "tax",
        type: "DOUBLE",
      },
      {
        name: "total",
        type: "DOUBLE",
      },
    ],
  },
];

export const metrics = [
  {
    id: 1,
    metric: "COUNT",
    column: "id",
    currentValue: 50,
  },
  {
    id: 2,
    metric: "HOURS_SINCE_MAX_DATE",
    column: "created_at",
    currentValue: 2.53,
  },
];
