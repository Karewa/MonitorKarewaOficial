import Vue from 'vue';
import Router from 'vue-router';


//Note: @ is aliased in webpack.config to './src'

//User
import UserIndex from '@/pages/user/Index';
import UserHeader from '@/pages/user/Header';
import UserFooter from '@/pages/user/Footer';
import UserHome from '@/pages/user/home/Home';

import Suppliers from '@/pages/user/suppliers/Suppliers';
import Contracts from '@/pages/user/contracts/Contracts';
import Comparations from '@/pages/user/comparations/Comparations';
import Calculations from '@/pages/user/calculations/Calculations';
import Resources from '@/pages/user/resources/Resources';

import StyleIndex from '@/pages/style/Index';
import Style from '@/pages/style/Style';
import ClientStyle from '@/pages/style/Client';
import ErrorsStyle from '@/pages/style/Errors';
import LoginStyle from '@/pages/style/Login';

//Admin
import AdminIndex from '@/pages/admin/Index';
import AdminHeader from '@/pages/admin/Header';
import AdminSidebar from '@/pages/admin/Sidebar';
import AdminFooter from '@/pages/admin/Footer';
import DataLoad from '@/pages/admin/dataLoad/DataLoad';
import AdminSettings from '@/pages/admin/settings/Settings';

//Admin-Catalogs
import AdminHome from '@/pages/admin/home/Home';
import AdminSuppliers from '@/pages/admin/suppliers/CatalogSuppliers';
import AdminResources from '@/pages/admin/resources/CatalogResources';
import AdminCalculations from '@/pages/admin/calculations/CatalogCalculations';
import AdminContracts from '@/pages/admin/contracts/CatalogContracts';
import AdminUsers from '@/pages/admin/users/CatalogUsers';
import AdminAdministrativeUnits from '@/pages/admin/administrativeUnits/CatalogAdministrativeUnits';
import AdminOrganizations from '@/pages/admin/organizations/CatalogOrganizations';

import Login from '@/pages/admin/Login';

// Fallback page
import NotFound from '@/pages/errors/NotFound';

Vue.use(Router);

export default new Router({
    mode : 'history',
    routes: [
        {
            path: '/',
            // name: 'UserIndex',
            components: {
                default: UserIndex,
                header: UserHeader,
                footer: UserFooter
            },
            children: [
                {
                    path: '',
                    name: 'UserHome',
                    component: UserHome
                },
                {
                    path: 'suppliers',
                    name: 'Suppliers',
                    component: Suppliers
                },
                {
                    path: 'contracts',
                    name: 'Contracts',
                    component: Contracts
                },
                {
                    path: 'comparations',
                    name: 'Comparations',
                    component: Comparations
                },
                {
                    path: 'calculations',
                    name: 'Cálculos',
                    component: Calculations
                },
                {
                    path: 'resources',
                    name: 'Resources',
                    component: Resources
                }
            ]
        },
        {
            //
            // /admin => AdminHome
            // /admin/suppliers => AdminSuppliers
            path: '/admin',
            // name: 'AdminHome',
            components: {
                default: AdminIndex,
                header: AdminHeader,
                sidebar: AdminSidebar,
                footer: AdminFooter
            },
            children: [
                {
                    path: '',
                    name: 'AdminHome',
                    component: AdminHome
                },
                {
                    path: 'suppliers',
                    name: 'AdminSuppliers',
                    component: AdminSuppliers

                },
                {
                    path: 'resources',
                    name: 'AdminResources',
                    component: AdminResources
                },
                {
                    path: 'calculations',
                    name: 'AdminCalculations',
                    component: AdminCalculations
                },
                {
                    path: 'contracts',
                    name: 'AdminContracts',
                    component: AdminContracts
                },
                {
                    path: 'users',
                    name: 'AdminUsers',
                    component: AdminUsers
                },
                {
                    path: 'administrative-units',
                    name: 'AdminAdministrativeUnits',
                    component: AdminAdministrativeUnits
                },
                {
                    path: 'organizations',
                    name: 'Organizations',
                    component: AdminOrganizations
                },
                {
                    path: 'data-load',
                    name: 'DataLoad',
                    component: DataLoad
                },
                {
                    path: 'settings',
                    name: 'AdminSettings',
                    component: AdminSettings
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/style',
            // name: 'StyleIndex',
            component: StyleIndex,
            children: [
                {
                    path: '',
                    name: 'Style',
                    component: Style
                },
                {
                    path: 'client',
                    name: 'ClientStyle',
                    component: ClientStyle
                },
                {
                    path: 'errors',
                    name: 'ErrorsStyle',
                    component: ErrorsStyle
                },
                {
                    path: 'login',
                    name: 'LoginStyle',
                    component: LoginStyle
                }
            ]
        },
        {
            path: '**',
            name: 'NotFound',
            component: NotFound
        }
    ]
});
