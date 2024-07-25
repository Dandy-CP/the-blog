import React from "react";
import Image from "next/image";
import ThumbnailPNG from "@/public/PNG/thumbnail.png";
import fetchServer from "@/utils/fetchServer";
import { Post } from "@/types/post.types";
import { ErrorView } from "@/components/partials";
import { Author, Tags, CommentSection } from "@/components/module/post";

interface IProps {
  params: { id: string };
}

const getData = async (postID: string) => {
  const response = await fetchServer<Post>({ endpoint: `posts/${postID}` });

  return response;
};

const PostDetail = async ({ params }: IProps) => {
  const { data, error, isError } = await getData(params.id);

  if (isError) {
    return <ErrorView error={error} />;
  }

  return (
    <div className="w-full">
      <h1 className="w-1/2 text-6xl font-bold text-center my-40 mx-auto desktop:w-2/3 tablet:w-[75%] phone:w-full">
        {data.title}
      </h1>

      <Image
        src={ThumbnailPNG}
        alt=""
        width={1000}
        height={1000}
        className="mx-auto"
      />

      <hr className="w-full border-b-4 border-black mx-auto my-20" />

      <div className="w-2/3 flex flex-col mx-auto desktop:w-[80%] tablet:w-[90%] phone:w-[90%]">
        <Author
          authorName="Unknown"
          views={data.views}
          likes={data.reactions.likes}
          dislikes={data.reactions.dislikes}
        />

        <div className="my-10">
          <p className="text-xl">{data.body}</p>
        </div>

        <Tags tags={data.tags} />

        <hr className="w-full border-b-4 border-black mx-auto my-20" />

        <div className="mb-10">
          <CommentSection postID={params.id} />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
