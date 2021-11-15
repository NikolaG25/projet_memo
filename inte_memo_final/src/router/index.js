import Vue from 'vue'
import Router from 'vue-router'

import Accueil from '@/components/Accueil'
import Adherer from '@/components/Adherer'
import BDE from '@/components/BDE'
import BonsPlans from '@/components/BonsPlans'
import Connexion from '@/components/Connexion'
import Evenements from '@/components/Evenements'
import Forum from '@/components/Forum'
import Inscription from '@/components/Inscription'
import MentionsLegales from '@/components/MentionsLegales'
import NotreEquipe from '@/components/NotreEquipe'
import Profil from '@/components/Profil'
import SujetForum from '@/components/SujetForum'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/adherer', name: 'Adherer', component: Adherer },
    { path: '/bde', name: 'BDE', component: BDE },
    { path: '/forum', name: 'BonsPlans', component: BonsPlans },
    { path: '/bonsPlans', name: 'Connexion', component: Connexion },
    { path: '/connexion', name: 'Evenements', component: Evenements },
    { path: '/evenements', name: 'Forum', component: Forum },
    { path: '/inscription', name: 'Inscription', component: Inscription },
    { path: '/mentionsLegales', name: 'MentionsLegales', component: MentionsLegales },
    { path: '/notreEquipe', name: 'NotreEquipe', component: NotreEquipe },
    { path: '/profil', name: 'Profil', component: Profil },
    { path: '/sujetForum', name: 'SujetForum', component: SujetForum },
  ]
})
