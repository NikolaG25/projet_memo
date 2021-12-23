import Vue from 'vue'
import Router from 'vue-router'

import Accueil from '@/components/Accueil'
import Adherer from '@/components/Adherer'
import BDE from '@/components/BDE'
import BonsPlans from '@/components/BonsPlans'
import Evenements from '@/components/Evenements'
import Forum from '@/components/Forum'
import MentionsLegales from '@/components/MentionsLegales'
import NotreEquipe from '@/components/NotreEquipe'

//route asso etudiante spécifique
import BDEmmi from '@/components/BDEmmi'

//route news et bons plans spécifique
import ExempleArticle from '@/components/ExempleArticle'
import ExempleBonsPlans from '@/components/ExempleBonsPlans'

//routes liste news et bons plans
import ListeBonsPlans from '@/components/ListeBonsPlans'
import ListeNews from '@/components/ListeNews'


//route liste news par mois
import ArticleMonth from "@/components/ArticleMonth";
//route liste news par an
import Years from "@/components/Years";
import NewsYear from "@/components/NewsYear";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/adherer', name: 'Adherer', component: Adherer },
    { path: '/bde', name: 'BDE', component: BDE },
    { path: '/bonsPlans', name: 'BonsPlans', component: BonsPlans },
    { path: '/evenements', name: 'Evenements', component: Evenements },
    { path: '/forum', name: 'Forum', component: Forum },
    { path: '/mentionsLegales', name: 'MentionsLegales', component: MentionsLegales },
    { path: '/notreEquipe', name: 'NotreEquipe', component: NotreEquipe },
    { path: '/bdeMmi/:id', name: 'BDEmmi', component: BDEmmi },
    { path: '/exempleArticle/:id', name: 'ExempleArticle', component: ExempleArticle },
    { path: '/exempleBonsPlans/:id', name: 'ExempleBonsPlans', component: ExempleBonsPlans },
    { path: '/listeBonsPlans', name: 'ListeBonsPlans', component: ListeBonsPlans },

    { path: '/listeNews', name: 'ListeNews', component: ListeNews },

    {path: '/ArticleMonth/:month', name: 'ArticleMonth', component: ArticleMonth},

    { path: '/Years', name: 'Years', component: Years },
    {path: '/NewsYear/:year', name: 'NewsYear', component: NewsYear},


  ]
})
