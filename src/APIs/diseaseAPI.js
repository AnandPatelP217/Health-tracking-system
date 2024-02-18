const diseaseData = [
  {
    id: 1,
    disease_name: "Cancer",
    suggested_foods: [
      {
        foodName: "Berries",
        about:
          "Berries contain antioxidants, anti-inflammatory compounds, and fiber that may help prevent cancer and support overall health in patients.",
      },
      {
        foodName: "Leafy greens",
        about:
          "Leafy greens contain antioxidants, vitamins, and phytochemicals that may help prevent cancer and support overall health.",
      },
      {
        foodName: "Citrus fruits",
        about:
          "Citrus fruits contain antioxidants like vitamin C, flavonoids, and limonoids, potentially aiding cancer prevention through cellular protection and anti-inflammatory effects.",
      },
      {
        foodName: "Whole grains",
        about:
          "Whole grains contain fiber, antioxidants, and phytochemicals, promoting gut health and potentially reducing cancer risk.",
      },
      {
        foodName: "Lean proteins",
        about:
          "Lean protein supports cancer patients with essential amino acids and nutrients aiding muscle maintenance and overall strength during treatment.",
      },
    ],
    avoiding_foods: [
      {
        foodName: "Processed meats",
        about:
          "METS (metastases) in cancer patients indicate advanced disease, requiring attention; ignoring may lead to delayed treatment and complications.",
      },
      {
        foodName: "Sugary foods",
        about:
          "Excessive sugar intake in cancer patients may promote inflammation and compromise immune function, hindering the body's natural defense mechanisms",
      },
      {
        foodName: "Processed snacks",
        about:
          "Snacks high in processed sugars and unhealthy fats can hinder cancer patients' health, causing inflammation and impacting treatment outcomes.",
      },
      {
        foodName: "Excessive red meat",
        about:
          "Red meat consumption may increase cancer risk due to carcinogens formed during cooking; limiting intake supports cancer prevention.",
      },
      {
        foodName: "Excess alcohol",
        about:
          "Excess alcohol for cancer patients can impair immune function, hinder treatment effectiveness, and increase complications, urging caution and moderation.",
      },
    ],
    dailyExercise: [
      {
        exerciseName: "Aerobic Exercise",
        about:
          "Excessive aerobic exercise for cancer patients may lead to fatigue and compromise immune function; moderation is crucial for well-being.",
      },
      {
        exerciseName: "Strength Training",
        about:
          "Excessive strength training in cancer patients may lead to fatigue, compromised immunity, and increased injury risk; moderation is essential.",
      },
      {
        exerciseName: "Flexibility Exercise",
        about:
          "Excessive flexibility exercises for cancer patients may risk injury or strain, emphasizing the need for gentle, tailored routines.",
      },
    ],
  },

  {
    id: 2,
    disease_name: "Heart Disease",
    suggested_foods: [
      {
        foodName: "Oily fish",
        about:
          "Oily fish like salmon contains omega-3 fatty acids, reducing heart disease risk by lowering cholesterol and inflammation.",
      },
      {
        foodName: "Berries",
        about:
          "Berries benefit heart health with antioxidants, fiber, and anthocyanins, supporting blood vessel function and reducing inflammation.",
      },
      {
        foodName: "Whole grains",
        about:
          "Whole grains contain fiber, antioxidants, and nutrients that support heart health, reducing the risk of heart disease.",
      },
      {
        foodName: "Nuts",
        about:
          "Nuts contain heart-healthy unsaturated fats, fiber, antioxidants, and omega-3 fatty acids, supporting cardiovascular health and reducing heart disease risk.",
      },
      {
        foodName: "Leafy greens",
        about:
          "Leafy greens are rich in vitamins, minerals, and antioxidants, supporting heart health by reducing inflammation and improving blood vessel function.",
      },
    ],
    avoiding_foods: [
      {
        foodName: "Saturated fats",
        about:
          "Excessive saturated fats may raise cholesterol, increasing the risk of heart disease; it's crucial to limit intake for cardiovascular health.",
      },
      {
        foodName: "Trans fats",
        about:
          "Trans fats increase bad cholesterol (LDL) and decrease good cholesterol (HDL), raising the risk of heart disease; avoiding them is crucial.",
      },
      {
        foodName: "Processed foods",
        about:
          "Processed foods often contain high levels of salt, sugar, and unhealthy fats, contributing to cardiovascular risks; prioritizing whole foods is crucial for heart health.",
      },
      {
        foodName: "Excessive salt",
        about:
          "Excessive salt intake can raise blood pressure, increasing the risk of cardiovascular disease; limiting it promotes heart health.",
      },
      {
        foodName: "Sugary beverages",
        about:
          "Sugary beverages can contribute to obesity, diabetes, and heart disease, making it crucial to limit their consumption for better health.",
      },
    ],
    dailyExercise: [
      {
        exerciseName: "Cardiovascular Exercise",
        about:
          "Cardiovascular exercise, like brisk walking, improves heart health by enhancing circulation and reducing the risk of cardiovascular diseases. Ignore at your own health peril.",
      },
      {
        exerciseName: "Strength Training",
        about:
          "Excessive strength training in cancer patients may lead to fatigue, compromised immunity, and increased injury risk; moderation is essential.",
      },
      {
        exerciseName: "Balance and Stability Exercises",
        about:
          "Excessive flexibility exercises for cancer patients may risk injury or strain, emphasizing the need for gentle, tailored routines.",
      },
    ],
  },

  {
    id: 3,
    disease_name: "Diabetes",
    suggested_foods: [
      {
        foodName: "Non-starchy vegetables",
        about:
          "Non-starchy vegetables in diabetes provide fiber, vitamins, and minerals, promoting stable blood sugar levels and overall health.",
      },
      {
        foodName: "Whole grains",
        about:
          "Whole grains in diabetes provide fiber, vitamins, and minerals, supporting stable blood sugar levels and overall health.",
      },
      {
        foodName: "Lean proteins",
        about:
          "Lean protein aids diabetes by stabilizing blood sugar; rich in nutrients like poultry, fish, tofu, promoting satiety and muscle health.",
      },
      {
        foodName: "Healthy fats",
        about:
          "Healthy fats in diabetes provide sustained energy, improve insulin sensitivity, and include ingredients like avocados, nuts, and olive oil.",
      },
      {
        foodName: "Fruits in moderation",
        about:
          "Fruits in moderation offer fiber, vitamins, and antioxidants, supporting stable blood sugar levels for diabetes management.",
      },
    ],
    avoiding_foods: [
      {
        foodName: "Processed carbohydrates",
        about:
          "Processed carbohydrates spike blood sugar levels rapidly, posing a challenge for diabetes management; limiting them promotes stable glucose control.",
      },
      {
        foodName: "Sugary snacks",
        about:
          "Sugar snacks spike blood sugar, leading to insulin resistance and complications; ignoring them helps maintain stable glucose levels in diabetes.",
      },
      {
        foodName: "Fried foods",
        about:
          "Fried foods elevate blood sugar quickly due to high glycemic index and unhealthy fats, posing risks for diabetes complications.",
      },
      {
        foodName: "Excessive red and processed meats",
        about:
          "Excessive red and processed meat may increase diabetes risk due to saturated fats and harmful additives; moderation is advised.",
      },
      {
        foodName: "Excess alcohol",
        about:
          "Excess alcohol can lead to blood sugar fluctuations, insulin resistance, and complications, urging caution for diabetes management.",
      },
    ],
    dailyExercise: [
      {
        foodName: "Cardio Exercise",
        about:
          "Excessive cardio may lead to hypoglycemia and fatigue, emphasizing the need for balanced exercise in diabetes management.",
      },
      {
        foodName: "Strength Training",
        about:
          "Excessive strength training can lead to blood sugar spikes and injury risks, necessitating moderation for diabetes patients.",
      },
      {
        foodName: "Flexibility Exercise",
        about:
          "Excessive flexibility exercise can lead to joint instability and injury, caution is advised for diabetes patients to prevent harm.",
      },
    ],
  },
];

export default diseaseData;
