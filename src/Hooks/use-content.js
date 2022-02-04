import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
export default function useContent(target) {
  const db = getFirestore();
  const [allContent, setAllContent] = useState([]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, target));
      setAllContent(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    })();
  }, [db, target]);

  return { [target]: allContent };
}
