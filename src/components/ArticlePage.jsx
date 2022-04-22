import Article from './Article';
import Comments from './Comments';
import {useParams} from 'react-router';

export default function ArticlePage() {
  let {article_id} = useParams();

  return (
    <>
      <Article article_id={article_id} />
      <Comments article_id={article_id} />
    </>
  );
}
