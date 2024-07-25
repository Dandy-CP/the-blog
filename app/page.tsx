"use client";

import React, { useState } from "react";
import { PostList } from "@/components/module/homepage";
import { CardPost, ErrorView } from "@/components/partials";
import { PostResponse } from "@/types/post.types";
import { useFetch } from "@/hook/useFetch";
import { CardHighlightSkeleton } from "@/components/partials/skeleton";

const Home = () => {
  const [skip, setSkip] = useState(0);

  const { data, isFetching, error, refetch } = useFetch<PostResponse>({
    endpoint: "posts",
    inputParams: {
      limit: 7,
      skip: skip,
    },
  });

  if (error) {
    return (
      <ErrorView
        error={error}
        refetch={() => {
          refetch();
        }}
      />
    );
  }

  return (
    <div>
      {isFetching ? (
        <CardHighlightSkeleton />
      ) : (
        <CardPost
          variant="highlight"
          postID={data?.posts[0].id}
          title={data?.posts[0].title}
          desc={data?.posts[0].body}
        />
      )}

      <hr className="w-1/2 border-b-4 border-black mx-auto my-20" />

      <PostList
        isFetching={isFetching}
        posts={data?.posts}
        totalData={data?.total}
        skip={data?.skip}
        setSkip={setSkip}
      />
    </div>
  );
};

export default Home;
