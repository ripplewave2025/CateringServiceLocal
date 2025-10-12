export default function Menu() {
  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        { name: "Paneer Tikka Skewers", description: "Marinated paneer grilled to perfection.", price: "₹350" },
        { name: "Chicken Momos", description: "Steamed dumplings filled with seasoned chicken.", price: "₹280" },
        { name: "Crispy Chilli Potatoes", description: "Fried potato strips tossed in a spicy sauce.", price: "₹220" },
      ],
    },
    {
      name: "Main Courses",
      items: [
        { name: "Darjeeling Style Thukpa", description: "Noodle soup with vegetables and choice of meat.", price: "₹400" },
        { name: "Gorkhali Lamb Curry", description: "Slow-cooked lamb in a rich, aromatic gravy.", price: "₹550" },
        { name: "Mixed Vegetable Korma", description: "Assorted vegetables in a creamy, mild sauce.", price: "₹380" },
        { name: "Chicken Biryani", description: "Fragrant basmati rice cooked with spiced chicken.", price: "₹480" },
      ],
    },
    {
      name: "Desserts",
      items: [
        { name: "Mishti Doi", description: "Sweetened yogurt, a Bengali delicacy.", price: "₹150" },
        { name: "Gulab Jamun", description: "Deep-fried milk solids soaked in sugar syrup.", price: "₹180" },
      ],
    },
    {
      name: "Beverages",
      items: [
        { name: "Fresh Lime Soda", description: "Refreshing lime and mint cooler.", price: "₹100" },
        { name: "Darjeeling Tea (assorted)", description: "Premium selection of local teas.", price: "₹120" },
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-6 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Our Menu</h1>
      </div>

      <div className="relative z-[-1] flex flex-col place-items-center text-center max-w-3xl mb-16">
        <p className="text-lg leading-relaxed text-gray-700">
          Explore our delicious and diverse menu options, perfect for any event in Darjeeling, Sikkim, Siliguri, and surrounding areas. We offer a wide range of cuisines and can customize menus to suit your specific preferences and dietary requirements.
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {menuCategories.map((category, catIndex) => (
          <div key={catIndex} className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-orange-600 border-b-2 border-orange-300 pb-2">
              {category.name}
            </h2>
            <ul className="space-y-6">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-base">{item.description}</p>
                  </div>
                  <span className="text-xl font-bold text-green-700 whitespace-nowrap ml-4">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
