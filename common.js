
const groups = [
  { id: 'taes-2026', name: 'TAES 2025-26', hoursPersonWeek: 3, sprints: [
    { from: '11/03/2026', to: '22/04/2026', weeks: 4 },
    { from: '22/04/2026', to: '21/05/2026', weeks: 4 },
  ]},
];

const groupsMap = {};
for (const group of groups) {
  groupsMap[group.id] = group;
}

const groupsEnabled = [
  groupsMap['taes-2026'],
];
