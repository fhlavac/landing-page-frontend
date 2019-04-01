import openshift from './components/openshift.svg';
import hcm from './components/hcm.svg';
import insights from './components/insights.svg';
import rhelCs from './components/rhel-cs.svg';

export const activeTechnologies = [
    {
        name: 'insights',
        id: 'insights',
        url: 'insights/actions',
        icon: insights,
        title: 'Red Hat Insights',
        body: 'Predict Risk. Get guidance. Stay secure.'
    },
    {
        id: 'RHEL',
        url: 'rhel/dashboard',
        icon: rhelCs,
        title: 'Red Hat Enterprise Linux management services',
        body: 'Operate and protect your Red Hat platforms.'
    },
    {
        id: 'Openshift',
        url: 'openshift',
        icon: openshift,
        title: 'Red Hat OpenShift Cluster Manager',
        body: 'Manage your highly available public and private clouds.'
    },
    {
        id: 'Hybrid',
        url: 'hybrid/catalog',
        icon: hcm,
        title: 'Hybrid cloud management services',
        body: 'Govern, automate, and manage multicloud environments.',
        isPreview: true
    }
];
