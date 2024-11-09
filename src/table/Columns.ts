export const COLUMNS = [
  {
    header: "Task Name",
    accessorKey: "taskname", // The key in your data
    filterFn: "arrIncludesSome",
    enableGlobalFilter: false,
    meta: {
      filterVariant: "select",
    },
  },
  {
    header: "Workspace",
    accessorKey: "user_workspace_name",
    filterFn: "arrIncludesSome",
    meta: {
      filterVariant: "select",
    },

    //         meta:{

    // }
  },
  {
    header: "Project",
    accessorKey: "user_project_name",

    filterFn: "arrIncludesSome",
    //    meta:{
    //   filterVariant:'select',
    // }
  },
  {
    header: "Created On",
    accessorKey: "created_at",
    enableGlobalFilter: false,
  },
  {
    header: "Status",
    accessorKey: "status",
    filterFn: "arrIncludesSome",
  },
  {
    header: "Message",
    accessorKey: "message",
    enableGlobalFilter: false,
  },

  {
    accessorKey: "actions",
    header: "Actions",
    enableGlobalFilter: false,
  },
];
