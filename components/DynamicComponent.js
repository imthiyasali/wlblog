import Teaser from './Teaser'
import Feature from './Feature'
import FeaturedPosts from './FeaturedPosts'
import Grid from './Grid'
import Placeholder from './Placeholder'
import PostsList from './PostsList'
import Page from './Page'
import Idelement from './Idelement'
import BlogPost from './BlogPost'
import Tagname from './Tagname'

import Tagdetails from './Tagdetails'

import Tagdesc from './Tagdesc'

import Tagcode from './Tagcode'

import Tag from './Tag'
import Text from './Text'

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'featured-posts': FeaturedPosts,
  'page': Page,
  'post': BlogPost,
  'text': Text,
  'selected-posts': PostsList,
  'tagname': Tagname,
  'tagdesc': Tagdesc,
  "tagdetails":Tagdetails,
  'tag': Tag,
  'tagcode':Tagcode,
  'idelement':Idelement
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent
