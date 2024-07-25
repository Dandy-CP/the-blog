# The Blog

## Installation

Clone project from this repo:

```bash
  git clone https://github.com/Dandy-CP/the-blog.git
```

Enter to project folder:

```bash
  cd the-blog
```

Install packages Project with npm:

```bash
  npm install
```

Run the development server localy on your machine:

```bash
  npm run dev
```

## Tech Stack

<p style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px">
  <img src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' />
  <img src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
  <img src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' />
</p>

## Atomic Design

![Atomic](https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png)

in this project These Atoms Components called elements, Molecules is called Partials, Organisms is called Modules, and These Elements, Partials and Modules Components are render in Pages and called when they need

Advantages of Atomic Design: Modularity, Reusability, Updating and Maintenance

Feel free to update or enhance these components to meet the reqruitment needeed, there are all in components folder

## Usage/Examples With Components

all elements components is exported in `index.ts` and called with barrel import, example

```typescript
import { Input, Button } from "@/components/elements";

function App() {
  return (
    <>
      <Input />
      <Button />
    </>
  );
}
```

## Usage/Examples With useFetch Client Side (GET Methode)

example how to make request Call API Get With Custom Hooks on client side:

```typescript
"use client";

//import useFetch function
import { useFetch } from "@/hook/useFetch";

const Home = () => {
  // declare function included needed parameters and return value from useFetch function can be destructure
  const { data, isFetching, error, refetch } = useFetch<TypesResponse>({
    endpoint: "path/to/endpoint", // path to endpoint
    inputParams: {
      // input params props used for query search ex: ?limit=7&skip=7
      limit: 7,
      skip: skip,
    },
  });

  //data value is value returned from API
  //isFetching is boolean value indicate the request from API is finish
  //error is error message from API
  //refetch is function to re call function again

  if (error) {
    // if threse any error return the render view to errorViews
    return (
      <ErrorView
        error={error}
        refetch={() => {
          refetch();
        }}
      />
    );
  }

  return <div>{data}</div>;
};

export default Home;
```

## Usage/Examples With fetchServer on Server Side (GET Methode)

example how to make request Call API Get on server Side:

```typescript
//import function fetchServer
import fetchServer from "@/utils/fetchServer";

// declare getData function to be excute in server side
const getData = async (postID: string) => {
  // declare fetchServer function included needed parameters
  const response = await fetchServer<TypesPost>({
    endpoint: "path/to/endpoint",
  });

  //return all value from fetchServer
  return response;
};

const PostDetail = async ({ params }: IProps) => {
  // declare getData function and destructure all available
  const { data, error, isError } = await getData(params.id);

  if (isError) {
    // if threse any error from API retrun with ErrorView
    return <ErrorView error={error} />;
  }

  return <div className="w-full">{data}</div>;
};

export default PostDetail;
```

## Acknowledgements

- [Next.JS](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
