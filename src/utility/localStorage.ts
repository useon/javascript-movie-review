export const setUserVotesToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getUserVotesFromLocalStorage = () => {
  const userVoteData: IVoteData[] = JSON.parse(
    localStorage.getItem('userVotes') || '[]',
  );
  return userVoteData;
};

export const getUserVoteScoreFromLocalStorage = (movieID: number) => {
  const existingVoteData = getUserVotesFromLocalStorage();
  const existingVote = existingVoteData.find((data) => data.id === movieID);
  const score = existingVote ? existingVote.score : 0;
  return score;
};

export const addUserVotesToLocalStorage = (voteData: IVoteData) => {
  const existingVoteData: IVoteData[] = JSON.parse(
    localStorage.getItem('userVotes') || '[]',
  );
  const existingVote = existingVoteData.find((data) => data.id === voteData.id);

  if (existingVote) {
    existingVote.score = voteData.score;
  } else {
    existingVoteData.push(voteData);
  }

  localStorage.setItem('userVotes', JSON.stringify(existingVoteData));
};