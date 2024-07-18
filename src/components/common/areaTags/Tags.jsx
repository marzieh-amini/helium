import { createSelector } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useGetTagsQuery } from "../../../api/apislice";

const Tags = ({ articleTags }) => {
  const selectArticleTags = useMemo(() => {
    return createSelector(
      (res) => res.data,
      (res, articleTags) => articleTags,
      (data, articleTags) =>
        data?.filter((tag) => articleTags.includes(tag.id)) ?? []
    );
  }, []);
  const { tagsList } = useGetTagsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      tagsList: selectArticleTags(result, articleTags),
    }),
  });
  return (
    <>
      {tagsList.length > 0
        ? tagsList.map((tag) => {
            return (
              <h3 key={tag.id} className="tags">
                <span>{tag.name}</span>
              </h3>
            );
          })
        : null}
    </>
  );
};

export default Tags;
