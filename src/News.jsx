import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function News() {
  const params = useParams();
  const currentPath = useLocation();

  const [news, setNews] = useState([
    {
      header: "Fresh Finds: Seasonal Produce Spotlight!",
      date: "October 12, 2024",
      description:
        "Fall is here, and so are your favorite seasonal fruits and veggies! Pumpkins, apples, and squash are in full swing, ready to take your recipes to the next level. Whether you're planning soups, pies, or festive dinners, don't miss out on these fresh autumn ingredients.",
    },
    {
      header: "New Feature Alert: Meal Planning Made Easy",
      date: "October 10, 2024",
      description:
        "We’ve just launched a new meal-planning feature to help you organize your week! Now you can create custom meal plans and instantly add ingredients to your grocery list. Say goodbye to last-minute trips to the store—get everything in one go!",
    },
    {
      header: "Local Spotlight: Support Your Farmers’ Market",
      date: "October 5, 2024",
      description:
        "Shopping local is a great way to get fresh, organic produce while supporting your community. Find your nearest farmers' market and enjoy farm-to-table freshness. Plus, it’s a great way to discover unique ingredients you might not find at big stores!",
    },
  ]);

  return (
    <>
      <div>
        <h2>News section</h2>
      </div>

      {/* // ? Redirection using params */}
      {params.id && (
        <div>
          <p>Redirection using params: {params.id}</p>
        </div>
      )}

      {/* // ? Redirection using path */}
      {currentPath.pathname == "/news/path" && (
        <div>
          <p>Redirection using path: {currentPath.pathname}</p>
        </div>
      )}

      {news.map((item, index) => (
        <div key={index} style={{ paddingBottom: 16 }}>
          <p>
            <b>{item.header}</b>
          </p>
          <p>{item.date}</p>
          <p>{item.description}</p>
          <button>Read more</button>
        </div>
      ))}
    </>
  );
}
