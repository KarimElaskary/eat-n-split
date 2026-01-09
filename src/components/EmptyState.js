import { useFriends } from '../contexts/FriendsContext';
import Button from './Button';

const EmptyState = () => {
    const { setIsOpen } = useFriends();
    
    return (
        <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-xl shadow-sm border border-orange-100 max-w-md mx-auto mt-10">
            <span className="text-6xl mb-6" role="img" aria-label="friends">👋</span>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Welcome to Eat-N-Split!</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
                It looks like you haven't added any friends yet. 
                Start by adding a friend to track expenses and split bills effortlessly.
            </p>
            <Button onClick={() => setIsOpen(true)}>Start Adding Friends</Button>
        </div>
    );
};

export default EmptyState;
