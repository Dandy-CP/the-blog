"use client";

import React, { useEffect, useState } from "react";
import { useFetch } from "@/hook/useFetch";
import { Button, Skeleton } from "@/components/elements";
import { ErrorView } from "@/components/partials";
import CommentBox from "./partials/CommentBox";
import { CommentSkeleton } from "@/components/partials/skeleton";
import { PostCommentResponse, Comment } from "@/types/comment.types";

interface IProps {
  postID: string;
}

const CommentSection = ({ postID }: IProps) => {
  const [comment, setComment] = useState<Comment[]>([]);
  const [skip, setSkip] = useState(0);

  const { data, isFetching, error, refetch } = useFetch<PostCommentResponse>({
    endpoint: `comments/post/${postID}`,
    inputParams: {
      limit: 3,
      skip: skip,
    },
  });

  const commentData = data?.comments ?? [];

  const handleLoadMoreComment = () => {
    setSkip((previousData) => {
      return previousData + 3;
    });
  };

  useEffect(() => {
    if (!isFetching && !error) {
      setComment((previousData) => [...previousData, ...commentData]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

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
      <h1 className="text-4xl font-semibold mb-10">
        What Other People Saying:
      </h1>

      <div className="w-10/12 flex flex-col gap-5 border border-black border-t-8 p-5 mx-auto desktop:w-full tablet:w-full phone:w-full">
        {comment.map((value) => (
          <CommentBox
            key={value.id}
            name={value.user.fullName}
            commentContent={value.body}
            likes={value.likes}
          />
        ))}

        {comment.length === 0 && (
          <h1 className="text-xl font-semibold text-center">
            There&apos;s no comment on this post...
          </h1>
        )}

        {isFetching && (
          <React.Fragment>
            {Array(3)
              .fill(3)
              .map((_, index) => (
                <CommentSkeleton key={index} />
              ))}
          </React.Fragment>
        )}

        {data?.total !== comment.length && (
          <Button
            size="full"
            loading={isFetching}
            disabled={isFetching}
            onClick={() => {
              handleLoadMoreComment();
            }}
          >
            Load More Comment
          </Button>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
