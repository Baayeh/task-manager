const projects = [
  {
    id: 'P1',
    start_date: '2023-01-01',
    end_date: '2023-01-31',
    title: 'EduNation',
    status: 'active',
    tasks: [
      {
        id: 'T1',
        title: 'Task 1',
        priority: 'high',
        status: 'todo',
        start_date: '2023-01-01',
        end_date: '2023-01-05',
      },
      {
        id: 'T2',
        title: 'Task 2',
        priority: 'medium',
        status: 'in-progress',
        start_date: '2023-01-06',
        end_date: '2023-01-15',
      },
      {
        id: 'T3',
        title: 'Task 3',
        priority: 'low',
        status: 'done',
        start_date: '2023-01-16',
        end_date: '2023-01-20',
      },
      {
        id: 'T4',
        title: 'Task 4',
        priority: 'high',
        status: 'todo',
        start_date: '2023-01-21',
        end_date: '2023-01-25',
      },
      {
        id: 'T5',
        title: 'Task 5',
        priority: 'medium',
        status: 'in-progress',
        start_date: '2023-01-26',
        end_date: '2023-01-31',
      },
    ],
  },
  {
    id: 'P2',
    start_date: '2023-02-01',
    end_date: '2023-02-28',
    title: 'SmartCities Initiative',
    status: 'inactive',
    tasks: [
      {
        id: 'T1',
        title: 'Task 1',
        priority: 'low',
        status: 'done',
        start_date: '2023-02-01',
        end_date: '2023-02-05',
      },
      {
        id: 'T2',
        title: 'Task 2',
        priority: 'medium',
        status: 'in-progress',
        start_date: '2023-02-06',
        end_date: '2023-02-15',
      },
      {
        id: 'T3',
        title: 'Task 3',
        priority: 'high',
        status: 'todo',
        start_date: '2023-02-16',
        end_date: '2023-02-20',
      },
      {
        id: 'T4',
        title: 'Task 4',
        priority: 'high',
        status: 'in-progress',
        start_date: '2023-02-21',
        end_date: '2023-02-25',
      },
      {
        id: 'T5',
        title: 'Task 5',
        priority: 'medium',
        status: 'todo',
        start_date: '2023-02-26',
        end_date: '2023-02-28',
      },
    ],
  },
  {
    id: 'P3',
    start_date: '2023-03-01',
    end_date: '2023-03-31',
    title: 'DataGenius',
    status: 'inactive',
    tasks: [
      {
        id: 'T1',
        title: 'Task 1',
        priority: 'medium',
        status: 'in-progress',
        start_date: '2023-03-01',
        end_date: '2023-03-05',
      },
      {
        id: 'T2',
        title: 'Task 2',
        priority: 'high',
        status: 'done',
        start_date: '2023-03-06',
        end_date: '2023-03-15',
      },
      {
        id: 'T3',
        title: 'Task 3',
        priority: 'low',
        status: 'todo',
        start_date: '2023-03-16',
        end_date: '2023-03-20',
      },
      {
        id: 'T4',
        title: 'Task 4',
        priority: 'high',
        status: 'in-progress',
        start_date: '2023-03-21',
        end_date: '2023-03-25',
      },
      {
        id: 'T5',
        title: 'Task 5',
        priority: 'medium',
        status: 'todo',
        start_date: '2023-03-26',
        end_date: '2023-03-31',
      },
    ],
  },
  {
    id: 'P4',
    start_date: '2023-04-01',
    end_date: '2023-04-30',
    title: 'GreenTech Ventures',
    status: 'active',
    tasks: [
      {
        id: 'T1',
        title: 'Task 1',
        priority: 'high',
        status: 'done',
        start_date: '2023-04-01',
        end_date: '2023-04-05',
      },
      {
        id: 'T2',
        title: 'Task 2',
        priority: 'low',
        status: 'todo',
        start_date: '2023-04-06',
        end_date: '2023-04-15',
      },
      {
        id: 'T3',
        title: 'Task 3',
        priority: 'medium',
        status: 'in-progress',
        start_date: '2023-04-16',
        end_date: '2023-04-20',
      },
      {
        id: 'T4',
        title: 'Task 4',
        priority: 'high',
        status: 'todo',
        start_date: '2023-04-21',
        end_date: '2023-04-25',
      },
      {
        id: 'T5',
        title: 'Task 5',
        priority: 'medium',
        status: 'in-progress',
        start_date: '2023-04-26',
        end_date: '2023-04-30',
      },
    ],
  },
  {
    id: 'P5',
    start_date: '2023-05-01',
    end_date: '2023-05-31',
    title: 'CreativeWave',
    status: 'active',
    tasks: [
      {
        id: 'T1',
        title: 'Task 1',
        priority: 'medium',
        status: 'in-progress',
        start_date: '2023-05-01',
        end_date: '2023-05-05',
      },
      {
        id: 'T2',
        title: 'Task 2',
        priority: 'high',
        status: 'done',
        start_date: '2023-05-06',
        end_date: '2023-05-15',
      },
      {
        id: 'T3',
        title: 'Task 3',
        priority: 'low',
        status: 'todo',
        start_date: '2023-05-16',
        end_date: '2023-05-20',
      },
      {
        id: 'T4',
        title: 'Task 4',
        priority: 'high',
        status: 'in-progress',
        start_date: '2023-05-21',
        end_date: '2023-05-25',
      },
      {
        id: 'T5',
        title: 'Task 5',
        priority: 'medium',
        status: 'todo',
        start_date: '2023-05-26',
        end_date: '2023-05-31',
      },
    ],
  },
  {
    id: 'P6',
    start_date: '2023-06-01',
    end_date: '2023-06-30',
    title: 'FutureForge',
    status: 'active',
    tasks: [
      {
        id: 'T1',
        title: 'Task 1',
        priority: 'high',
        status: 'todo',
        start_date: '2023-06-01',
        end_date: '2023-06-05',
      },
      {
        id: 'T2',
        title: 'Task 2',
        priority: 'low',
        status: 'in-progress',
        start_date: '2023-06-06',
        end_date: '2023-06-15',
      },
      {
        id: 'T3',
        title: 'Task 3',
        priority: 'medium',
        status: 'done',
        start_date: '2023-06-16',
        end_date: '2023-06-20',
      },
      {
        id: 'T4',
        title: 'Task 4',
        priority: 'high',
        status: 'todo',
        start_date: '2023-06-21',
        end_date: '2023-06-25',
      },
      {
        id: 'T5',
        title: 'Task 5',
        priority: 'medium',
        status: 'in-progress',
        start_date: '2023-06-26',
        end_date: '2023-06-30',
      },
    ],
  },
  {
    id: 'P7',
    start_date: '2023-07-01',
    end_date: '2023-07-31',
    title: 'HealthLink',
    status: 'inactive',
    tasks: [
      {
        id: 'T1',
        title: 'Task 1',
        priority: 'low',
        status: 'in-progress',
        start_date: '2023-07-01',
        end_date: '2023-07-05',
      },
      {
        id: 'T2',
        title: 'Task 2',
        priority: 'medium',
        status: 'done',
        start_date: '2023-07-06',
        end_date: '2023-07-15',
      },
      {
        id: 'T3',
        title: 'Task 3',
        priority: 'high',
        status: 'todo',
        start_date: '2023-07-16',
        end_date: '2023-07-20',
      },
      {
        id: 'T4',
        title: 'Task 4',
        priority: 'high',
        status: 'in-progress',
        start_date: '2023-07-21',
        end_date: '2023-07-25',
      },
      {
        id: 'T5',
        title: 'Task 5',
        priority: 'medium',
        status: 'todo',
        start_date: '2023-07-26',
        end_date: '2023-07-31',
      },
    ],
  },
  {
    id: 'P8',
    start_date: '2023-08-01',
    end_date: '2023-08-31',
    title: 'InnovateX',
    status: 'active',
    tasks: [
      {
        id: 'T1',
        title: 'Task 1',
        priority: 'medium',
        status: 'in-progress',
        start_date: '2023-08-01',
        end_date: '2023-08-05',
      },
      {
        id: 'T2',
        title: 'Task 2',
        priority: 'high',
        status: 'done',
        start_date: '2023-08-06',
        end_date: '2023-08-15',
      },
      {
        id: 'T3',
        title: 'Task 3',
        priority: 'low',
        status: 'todo',
        start_date: '2023-08-16',
        end_date: '2023-08-20',
      },
      {
        id: 'T4',
        title: 'Task 4',
        priority: 'high',
        status: 'in-progress',
        start_date: '2023-08-21',
        end_date: '2023-08-25',
      },
      {
        id: 'T5',
        title: 'Task 5',
        priority: 'medium',
        status: 'todo',
        start_date: '2023-08-26',
        end_date: '2023-08-31',
      },
    ],
  },
  {
    id: 'P9',
    start_date: '2023-09-01',
    end_date: '2023-09-30',
    title: 'EcoSolutions',
    status: 'active',
    tasks: [
      {
        id: 'T1',
        title: 'Task 1',
        priority: 'high',
        status: 'done',
        start_date: '2023-09-01',
        end_date: '2023-09-05',
      },
      {
        id: 'T2',
        title: 'Task 2',
        priority: 'low',
        status: 'todo',
        start_date: '2023-09-06',
        end_date: '2023-09-15',
      },
      {
        id: 'T3',
        title: 'Task 3',
        priority: 'medium',
        status: 'in-progress',
        start_date: '2023-09-16',
        end_date: '2023-09-20',
      },
      {
        id: 'T4',
        title: 'Task 4',
        priority: 'high',
        status: 'todo',
        start_date: '2023-09-21',
        end_date: '2023-09-25',
      },
      {
        id: 'T5',
        title: 'Task 5',
        priority: 'medium',
        status: 'in-progress',
        start_date: '2023-09-26',
        end_date: '2023-09-30',
      },
    ],
  },
  {
    id: 'P10',
    start_date: '2023-10-01',
    end_date: '2023-10-31',
    title: 'TechConnect',
    status: 'inactive',
    tasks: [
      {
        id: 'T1',
        title: 'Task 1',
        priority: 'low',
        status: 'in-progress',
        start_date: '2023-10-01',
        end_date: '2023-10-05',
      },
      {
        id: 'T2',
        title: 'Task 2',
        priority: 'medium',
        status: 'done',
        start_date: '2023-10-06',
        end_date: '2023-10-15',
      },
      {
        id: 'T3',
        title: 'Task 3',
        priority: 'high',
        status: 'todo',
        start_date: '2023-10-16',
        end_date: '2023-10-20',
      },
      {
        id: 'T4',
        title: 'Task 4',
        priority: 'high',
        status: 'in-progress',
        start_date: '2023-10-21',
        end_date: '2023-10-25',
      },
      {
        id: 'T5',
        title: 'Task 5',
        priority: 'medium',
        status: 'todo',
        start_date: '2023-10-26',
        end_date: '2023-10-31',
      },
    ],
  },
];

export default projects;
