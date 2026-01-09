import React from 'react';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import Header from './components/Header';
import EmptyState from './components/EmptyState';
import { FriendsProvider, useFriends } from './contexts/FriendsContext';

const AppContent = () => {
  const { friends, isOpen, setIsOpen, selectedFriend } = useFriends();

  return (
    <div className='app min-h-screen flex flex-col items-center bg-slate-50 font-sans pb-12 transition-all'>
      <Header />
      
      {friends.length > 0 ? (
          <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-start w-full max-w-5xl px-4 justify-center animate-fade-in'>
            <div className='sidebar flex flex-col gap-4 w-full md:w-auto md:min-w-[34rem]'>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-orange-100">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center justify-between">
                      My Friends
                      <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">{friends.length}</span>
                  </h3>
                  <FriendsList />
                  
                  {!isOpen && <div className="mt-4 flex justify-end">
                      <Button onClick={() => setIsOpen(true)}>Add Friend</Button>
                  </div>}
              </div>

              {isOpen === true && <FormAddFriend />}
              
              {isOpen && 
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Close
                  </Button>
               }
            </div>
            {selectedFriend ? (
              <FormSplitBill />
            ) : (
                <div className="flex-1 flex items-center justify-center p-12 bg-white rounded-lg border border-dashed border-slate-200 h-[400px]">
                    <p className="text-slate-400 font-medium">Select a friend to split a bill</p>
                </div>
            )}
          </div>
      ) : (
           isOpen ? (
             <div className="w-full max-w-md animate-fade-in-up">
                <FormAddFriend />
                <div className="flex justify-center mt-4">
                    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </div>
             </div>
           ) : (
              <EmptyState />
           )
      )}
    </div>
  );
};

const App = () => {
  return (
    <FriendsProvider>
      <AppContent />
    </FriendsProvider>
  );
};

export default App;
