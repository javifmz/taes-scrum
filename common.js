
const groups = [
  { id: 'sm-2021-M', name: 'SM 2021-22 - Martes', hoursPersonWeek: 5, sprints: [
    { from: '05/10/2021', to: '09/11/2021', weeks: 3 },
    { from: '08/11/2021', to: '30/11/2021', weeks: 3 },
    { from: '29/11/2021', to: '21/12/2021', weeks: 3 },
  ]},
  { id: 'sm-2021-J', name: 'SM 2021-22 - Jueves', hoursPersonWeek: 5, sprints: [
    { from: '07/10/2021', to: '04/11/2021', weeks: 3 },
    { from: '03/11/2021', to: '25/11/2021', weeks: 3 },
    { from: '24/11/2021', to: '16/12/2021', weeks: 3 },
  ]},
  { id: 'taes-2022', name: 'TAES 2021-22', hoursPersonWeek: 5, sprints: [
    { from: '23/02/2022', to: '16/03/2022', weeks: 3 },
    { from: '16/03/2022', to: '07/04/2022', weeks: 4 },
    { from: '07/04/2022', to: '11/05/2022', weeks: 4 },
  ]},
  { id: 'taes-2023', name: 'TAES 2022-23', hoursPersonWeek: 5, sprints: [
    { from: '22/02/2023', to: '15/03/2023', weeks: 3 },
    { from: '15/03/2023', to: '26/04/2023', weeks: 4 },
    { from: '26/04/2023', to: '24/05/2023', weeks: 4 },
  ]},
  { id: 'taes-2024', name: 'TAES 2023-24', hoursPersonWeek: 5, sprints: [
    { from: '21/02/2024', to: '13/03/2024', weeks: 3 },
    { from: '13/03/2024', to: '17/04/2024', weeks: 5 },
    { from: '17/04/2024', to: '22/05/2024', weeks: 5 },
  ]},
  { id: 'taes-2025-1', name: 'TAES 2024-25 (grupo 1)', hoursPersonWeek: 5, sprints: [
    { from: '19/02/2025', to: '13/03/2025', weeks: 2 },
    { from: '12/03/2025', to: '10/04/2025', weeks: 3 },
    { from: '09/04/2025', to: '14/05/2025', weeks: 4 },
  ]},
  { id: 'taes-2025-2', name: 'TAES 2024-25 (grupo 2)', hoursPersonWeek: 5, sprints: [
    { from: '19/02/2025', to: '13/03/2025', weeks: 2 },
    { from: '12/03/2025', to: '10/04/2025', weeks: 3 },
    { from: '09/04/2025', to: '14/05/2025', weeks: 4 },
  ]},
  { id: 'taes-2025-3', name: 'TAES 2024-25 (grupo 3)', hoursPersonWeek: 5, sprints: [
    { from: '19/02/2025', to: '13/03/2025', weeks: 2 },
    { from: '12/03/2025', to: '03/04/2025', weeks: 3 },
    { from: '02/04/2025', to: '14/05/2025', weeks: 3 },
  ]},
];

const groupsMap = {};
for (const group of groups) {
  groupsMap[group.id] = group;
}

const groupsEnabled = [
  // groupsMap['sm-2021-M'],
  // groupsMap['sm-2021-J'],
  //groupsMap['taes-2022'],
  //groupsMap['taes-2023'],
  //groupsMap['taes-2024'],
  groupsMap['taes-2025-1'],
  groupsMap['taes-2025-2'],
  groupsMap['taes-2025-3'],
];