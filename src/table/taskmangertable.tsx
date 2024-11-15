import { TableCompoent } from "./Tablecompoenet";
import { COLUMNS } from "./Columns";

export const Taskmanagertable = () => {
  const data = [
    {
      taskname: "Task 1",
      user_workspace_name: "Workspace A",
      user_project_name: "Project Alpha",
      created_at: "2024-01-01",
      status: "In Progress",
      message: "This is a message for Task 1.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 2",
      user_workspace_name: "Workspace B",
      user_project_name: "Project Beta",
      created_at: "2024-01-02",
      status: "Completed",
      message: "This is a message for Task 2.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 3",
      user_workspace_name: "Workspace A",
      user_project_name: "Project Alpha",
      created_at: "2024-01-03",
      status: "In Progress",
      message: "This is a message for Task 3.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 4",
      user_workspace_name: "Workspace C",
      user_project_name: "Project Gamma",
      created_at: "2024-01-04",
      status: "On Hold",
      message: "This is a message for Task 4.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 5",
      user_workspace_name: "Workspace D",
      user_project_name: "Project Delta",
      created_at: "2024-01-05",
      status: "Completed",
      message: "This is a message for Task 5.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 6",
      user_workspace_name: "Workspace E",
      user_project_name: "Project Epsilon",
      created_at: "2024-01-06",
      status: "In Progress",
      message: "This is a message for Task 6.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 7",
      user_workspace_name: "Workspace F",
      user_project_name: "Project Zeta",
      created_at: "2024-01-07",
      status: "Completed",
      message: "This is a message for Task 7.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 8",
      user_workspace_name: "Workspace G",
      user_project_name: "Project Eta",
      created_at: "2024-01-08",
      status: "In Progress",
      message: "This is a message for Task 8.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 9",
      user_workspace_name: "Workspace A",
      user_project_name: "Project Alpha",
      created_at: "2024-01-09",
      status: "On Hold",
      message: "This is a message for Task 9.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 10",
      user_workspace_name: "Workspace B",
      user_project_name: "Project Beta",
      created_at: "2024-01-10",
      status: "In Progress",
      message: "This is a message for Task 10.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 11",
      user_workspace_name: "Workspace C",
      user_project_name: "Project Gamma",
      created_at: "2024-01-11",
      status: "Completed",
      message: "This is a message for Task 11.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 12",
      user_workspace_name: "Workspace D",
      user_project_name: "Project Delta",
      created_at: "2024-01-12",
      status: "In Progress",
      message: "This is a message for Task 12.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 13",
      user_workspace_name: "Workspace E",
      user_project_name: "Project Epsilon",
      created_at: "2024-01-13",
      status: "Completed",
      message: "This is a message for Task 13.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 14",
      user_workspace_name: "Workspace F",
      user_project_name: "Project Zeta",
      created_at: "2024-01-14",
      status: "On Hold",
      message: "This is a message for Task 14.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 15",
      user_workspace_name: "Workspace G",
      user_project_name: "Project Eta",
      created_at: "2024-01-15",
      status: "In Progress",
      message: "This is a message for Task 15.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 16",
      user_workspace_name: "Workspace H",
      user_project_name: "Project Theta",
      created_at: "2024-01-16",
      status: "Completed",
      message: "This is a message for Task 16.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 17",
      user_workspace_name: "Workspace I",
      user_project_name: "Project Iota",
      created_at: "2024-01-17",
      status: "In Progress",
      message: "This is a message for Task 17.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 18",
      user_workspace_name: "Workspace J",
      user_project_name: "Project Kappa",
      created_at: "2024-01-18",
      status: "On Hold",
      message: "This is a message for Task 18.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 19",
      user_workspace_name: "Workspace K",
      user_project_name: "Project Lambda",
      created_at: "2024-01-19",
      status: "In Progress",
      message: "This is a message for Task 19.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 20",
      user_workspace_name: "Workspace L",
      user_project_name: "Project Mu",
      created_at: "2024-01-20",
      status: "Completed",
      message: "This is a message for Task 20.",
      actions: "Edit | Delete",
    },
    {
      taskname: "Task 21",
      user_workspace_name: "Workspace M",
      user_project_name: "Project Nu",
      created_at: "2024-01-21",
      status: "In Progress",
      message: "This is a message for Task 21.",
      actions: "Edit | Delete",
    },
  ];
  return (
    <>
      <TableCompoent
        //@ts-ignore
        Data={data}
        Columns={COLUMNS}
        SetSortingTable={false}
        ColumnFilter={false}
      />
    </>
  );
};
