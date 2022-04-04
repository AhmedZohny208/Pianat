import { 
  DashboardOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from "./AppConfig";

// const elheiaaNavTree = [{
//   key: 'elheiaa',
//   path: `${APP_PREFIX_PATH}/home`,
//   title: 'home',
//   icon: DashboardOutlined,
//   submenu: [
//     {
//       key: 'home',
//       path: `${APP_PREFIX_PATH}`,
//       title: 'home',
//       icon: DashboardOutlined,
//       breadcrumb: false,
//       submenu: []
//     },
//     {
//       key: 'projects',
//       path: `${APP_PREFIX_PATH}/projects`,
//       title: 'sidenav.projects',
//       icon: BranchesOutlined,
//       breadcrumb: false,
//       submenu: [
//         {
//           key: 'projects-projectsRequests',
//           path: `${APP_PREFIX_PATH}/projects/client`,
//           title: 'sidenav.projects.all',
//           icon: FunnelPlotOutlined,
//           breadcrumb: false,
//           role: ['ADMIN', 'CLIENT'],
//           submenu: []
//         },
//         {
//           key: 'projects-ongoing',
//           path: `${APP_PREFIX_PATH}/projects/ongoing`,
//           title: 'sidenav.dashboard.ongoing',
//           icon: DesktopOutlined,
//           breadcrumb: false,
//           role: ['ADMIN', 'CLIENT'],
//           submenu: []
//         }
//       ]
//     },
//   ]
// }]

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  submenu: []
}]

const mokhalfatNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/mokhalfat`,
  title: 'home',
  icon: DashboardOutlined,
  submenu: [
    {
      key: 'home',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'home',
      icon: DashboardOutlined,
      submenu: []
    },
    {
      key: 'home',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'home',
      icon: DashboardOutlined,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...mokhalfatNavTree
]

export default navigationConfig;