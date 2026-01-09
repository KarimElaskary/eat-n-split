import { createContext, useContext, useState } from "react";

const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const addFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  };

  const selectFriend = (friend) => {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setIsOpen(false);
  };

  const splitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  const resetBalance = (friend) => {
    setFriends((friends) =>
      friends.map((f) =>
        f.id === friend.id ? { ...f, balance: 0 } : f
      )
    );
  };

  return (
    <FriendsContext.Provider
      value={{
        friends,
        isOpen,
        setIsOpen,
        selectedFriend,
        addFriend,
        selectFriend,
        splitBill,
        resetBalance,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriends = () => {
  const context = useContext(FriendsContext);
  if (context === undefined)
    throw new Error("FriendsContext was used outside the FriendsProvider");
  return context;
};
