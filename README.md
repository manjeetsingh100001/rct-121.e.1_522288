## Problem

- create the following app
- you need to fetch a list of candidates from the following API:
  - `https://6287591de9494df61b36f47f.mockapi.io/candidates`
- Schema

```
{
    "createdAt":"2022-05-21T15:44:38.267Z",
    "name":"Christine",
    "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
    "rating":17659,
    "title":"Corporate",
    "salary":66042,
    "company_name":"O'Conner, Fisher and Shanahan",
    "id":"1"
}

/**
    Paginate
    Use _page and optionally _limit to paginate returned data.

    In the Link header you'll get first, prev, next and last links.

    GET /posts?_page=7
    GET /posts?_page=7&_limit=20

    Sort
    Add _sort and _order (ascending order by default)
    ASC and DESC are case sensitive!!!

    GET /posts?_sort=views&_order=ASC
    GET /posts/1/comments?_sort=votes&_order=ASC
 */

```

1. By default it will be in ascending order of candidates salar
1. Apply pagination and Limit the responses by `5 items per page`
1. There should be three buttons
1. a PREV button
   - text is `PREV`
   - it should be disabled in the first page
   - when enabled, and clicked on it, it will show up a loading indicator
1. a NEXT button
   - text is `NEXT`
   - when clicked, it will show up the loading indicator
   - it will load the next set of items
1. By default the order of the candidates should be in ascending order of Salaries
1. Sorting button which will have the following text `Sort by Descending Salary`
   - when a user clicks on it, it will show the loading indicator
   - the text will change to `Sort by Ascending Salary`
   - you will need to fetch the API in the descending order of salaries now
   - Note: `ASC and DESC are case sensitive!!!`
1. You need to ensure that the sorting and pagination works together
1. Whenever an api is called, the loading indicator should be called
1. When there is a failure, show an element with an error message saying Something went wrong!
1. There are 2 Components already made for you
   - Button
   - CandidateCard
   - The styles are already provided for you
   - You need to provide the correct properties and manage state in your application
   - useState, and useEffect achieve your final outputs
1. Marks are provided for each of the functionality above, some have more than the others
1. Ensure the ids and data-testid attributes are not changed
1. Make sure to use the components provided

#### Submission

- use the github repo provided by masai in masai-course
- submit the github link to the root folder of the project
  - please ensure the correct link is provided here
- submit the deployment link
  - please ensure that the correct link is provided
  - please submit netlify links only
  - please ensure you login to netlify and the links are valid ( if you dont login, it gets expired in 24 hours )
