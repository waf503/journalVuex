export default {
    name: 'daybook',
    component: () =>  import(/* webpackChunkName: "daybook"*/ '@/modules/layouts/DayBookLayout.vue'),
    children: [
        
    ]

}