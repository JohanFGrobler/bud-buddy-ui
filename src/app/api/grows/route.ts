import { NextResponse } from "next/server";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "@/lib/firebase";
import moment from "moment";

export async function GET() {
  const db = getFirestore(app);
  const growsCollection = collection(db, "grows");

  try {
    const snapshot = await getDocs(growsCollection);
    const grows = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        startDate: moment(data.startDate),
        endDate: moment(data.endDate),
        harvest: {
          ...data.harvest,
          date: moment(data.harvest?.date),
        },
      };
    });

    return NextResponse.json(grows);
  } catch (error) {
    console.error("Error fetching grows:", error);
    return NextResponse.json({ error: "Failed to fetch grows" }, { status: 500 });
  }
}
