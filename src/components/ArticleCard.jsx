import { Link } from 'react-router-dom';
import { categoryBackground } from '../utils/helperFunctions';
import { capitalise } from '../utils/helperFunctions';

export default function ArticleCard({ article }) {
  return (
    <li className='border border-grey rounded m-1  ' key={article.article_id}>
      <section className=''>
        <h3 className='font-bold font-2xl p-1'>{article.title}</h3>
        <p className='p-1 text-grayDark'>{article.author}</p>
        <div
          style={categoryBackground(article.topic)}
          className='text-white p-1'
        >
          <p>{capitalise(article.topic)}</p>
        </div>
        <div className=' h-24 m-1'>
          <p className='white-space max-h-12 break-words whitespace-normal overflow-hidden'>
            {article.body}
          </p>
          <p>....</p>
        </div>
      </section>
      <Link to={{ pathname: `/articles/${article.article_id}` }}>
        <button
          className={`text-white bg-gray border border-gray rounded mb-2 ml-2 px-2 hover:bg-grayDark
          }`}
        >
          Read more
        </button>
      </Link>
    </li>
  );
}
