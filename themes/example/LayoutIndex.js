
import { BlogListPage } from './components/BlogListPage'
import LayoutBase from './LayoutBase'

export const LayoutIndex = props => {
  return (
    <LayoutBase {...props}>
      <BlogListPage {...props} page={1} />
    </LayoutBase>
  )
}
