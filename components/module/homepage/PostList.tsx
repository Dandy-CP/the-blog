import React from "react";
import { CardPost, Pagination } from "@/components/partials";
import { Post } from "@/types/post.types";
import { CardPostSkeleton } from "@/components/partials/skeleton";

interface IProps {
  isFetching: boolean;
  posts: Post[] | undefined;
  totalData: number | undefined;
  skip: number | undefined;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
}

const PostList = ({
  isFetching,
  posts,
  totalData = 0,
  skip = 0,
  setSkip,
}: IProps) => {
  const postList = posts?.slice(1) ?? [];

  const totalPages = Math.floor(totalData / 7);
  const actualPage = skip / 7;
  const currentPage = actualPage < totalPages ? actualPage + 1 : 0;

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Articles</h1>

      <div className="flex flex-row flex-wrap gap-16 justify-center w-1/2 mx-auto my-20 desktop:w-full tablet:w-full">
        {isFetching ? (
          <React.Fragment>
            {Array(6)
              .fill(6)
              .map((_, index) => (
                <CardPostSkeleton key={index} />
              ))}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {postList?.map((value) => (
              <CardPost
                key={value.id}
                postID={value.id}
                title={value.title}
                desc={value.body}
              />
            ))}
          </React.Fragment>
        )}
      </div>

      <div className="flex justify-center mb-20">
        <Pagination
          pageSize={totalPages}
          currentPage={currentPage}
          limit={7}
          setSkip={setSkip}
        />
      </div>
    </div>
  );
};

export default PostList;
