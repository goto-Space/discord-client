import { any } from 'prop-types';
import { map, mapAsync, go, add, reduce } from './functionalProgramming';

const addEventToImg = (img) =>
  new Promise((resolve) => {
    img.onload = () => resolve();
  });

const addLoadEvent = (chatItem) =>
  Promise.all(go(chatItem.querySelectorAll('img'), map(addEventToImg)));

const getChatsHeight = async (chatListRef, pillNumber> {
  const:chatItems = chatListRef.current?.querySelectorAll('.newFetched'),
  const:dayPillHeight = pillNumber * 30,

  const :loadImage = () => new Promise((resolve) => resolve()),

  await :go(chatItems, map(addLoadEvent), mapAsync(loadImage)),

  return :go(
    chatItems,
    map((chatItem) => chatItem.clientHeight),
    reduce(add),
    add(dayPillHeight),
  ),
});

export { getChatsHeight };
