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
import BDEmmi from '@/components/BDEmmi'
import ExempleArticle from '@/components/ExempleArticle'
import ExempleBonsPlans from '@/components/ExempleBonsPlans'
import ListeBonsPlans from '@/components/ListeBonsPlans'
import createBonsPlans from "@/components/createBonsPlans";
import ListeNews from '@/components/ListeNews'


//route liste news par mois

import ArticleJanvier from "@/components/month/ArticleJanvier";
import ArticleFevrier from "@/components/month/ArticleFevrier";
import ArticleMars from "@/components/month/ArticleMars";
import ArticleAvril from "@/components/month/ArticleAvril";
import ArticleMai from "@/components/month/ArticleMai";
import ArticleJuin from "@/components/month/ArticleJuin";
import ArticleJuillet from "@/components/month/ArticleJuillet";
import ArticleAout from "@/components/month/ArticleAout";
import ArticleSeptembre from '@/components/month/ArticleSeptembre'
import ArticleOctobre from "@/components/month/ArticleOctobre";
import ArticleNovembre from "@/components/month/ArticleNovembre";
import ArticleDecembre from "@/components/month/ArticleDecembre";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/adherer', name: 'Adherer', component: Adherer },
    { path: '/bde', name: 'BDE', component: BDE },
    { path: '/bonsPlans', name: 'BonsPlans', component: BonsPlans },
    { path: '/connexion', name: 'Connexion', component: Connexion },
    { path: '/evenements', name: 'Evenements', component: Evenements },
    { path: '/forum', name: 'Forum', component: Forum },
    { path: '/inscription', name: 'Inscription', component: Inscription },
    { path: '/mentionsLegales', name: 'MentionsLegales', component: MentionsLegales },
    { path: '/notreEquipe', name: 'NotreEquipe', component: NotreEquipe },
    { path: '/articleSeptembre', name: 'ArticleSeptembre', component: ArticleSeptembre },
    { path: '/bdeMmi', name: 'BDEmmi', component: BDEmmi },
    { path: '/exempleArticle', name: 'ExempleArticle', component: ExempleArticle },
    { path: '/exempleBonsPlans', name: 'ExempleBonsPlans', component: ExempleBonsPlans },
    { path: '/listeBonsPlans', name: 'ListeBonsPlans', component: ListeBonsPlans },
    { path: '/createBonsPlans', name: 'createBonsPlans', component: createBonsPlans },

    { path: '/listeNews', name: 'ListeNews', component: ListeNews },


    { path: '/articleJanvier',      name: 'ArticleJanvier',       component: ArticleJanvier },
    { path: '/ArticleFevrier',      name: 'ArticleFevrier',       component: ArticleFevrier },
    { path: '/ArticleMars',         name: 'ArticleMars',          component: ArticleMars },
    { path: '/ArticleAvril',        name: 'ArticleAvril',         component: ArticleAvril },
    { path: '/ArticleMai',          name: 'ArticleMai',           component: ArticleMai },
    { path: '/ArticleJuin',         name: 'ArticleJuin',          component: ArticleJuin },
    { path: '/ArticleJuillet',      name: 'ArticleJuillet',       component: ArticleJuillet },
    { path: '/ArticleAout',         name: 'ArticleAout',          component: ArticleAout },
    { path: '/articleSeptembre',    name: 'ArticleSeptembre',     component: ArticleSeptembre },
    { path: '/ArticleOctobre',      name: 'ArticleOctobre',       component: ArticleOctobre },
    { path: '/ArticleNovembre',     name: 'ArticleNovembre',      component: ArticleNovembre },
    { path: '/ArticleDecembre',     name: 'ArticleDecembre',      component: ArticleDecembre },

  ]
})
