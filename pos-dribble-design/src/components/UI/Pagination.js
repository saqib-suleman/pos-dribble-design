import React from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const pageNumbers = [];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <nav>
      <ul className={classes.Pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={classes.page_item}>
            <a
              onClick={() => paginate(number)}
              href="!#"
              className={classes.page_link}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
