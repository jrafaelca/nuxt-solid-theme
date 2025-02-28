export default defineAppConfig({
    navigationItems: [{
        label: 'Main',
        type: 'label',
    }, {
        label: 'Dashboard',
        icon: 'i-lucide-layout-dashboard',
        to: '/',
    }, {
        label: 'Group Items',
        icon: 'i-lucide-shapes',
        defaultOpen: true,
        children: [{
            label: 'Item One',
            icon: 'i-lucide-circle-dot-dashed',
        }, {
            label: 'Item Two',
            icon: 'i-lucide-circle-dot-dashed',
        }, {
            label: 'Item Three',
            icon: 'i-lucide-circle-dot-dashed',
        }]
    },{
        label: 'System',
        type: 'label',
        position: 'end',
    },{
        label: 'Settings',
        icon: 'i-lucide-sliders-horizontal',
        position: 'end',
    }],
})
