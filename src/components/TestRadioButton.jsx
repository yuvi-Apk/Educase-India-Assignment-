import { useState } from 'react';

function RadioButtonDemo() {
  const [favoriteColor, setFavoriteColor] = useState('blue');
  const [favoriteFramework, setFavoriteFramework] = useState('react');
  
  // Options for first radio group
  const colorOptions = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'purple', label: 'Purple' }
  ];
  
  // Options for second radio group
  const frameworkOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' }
  ];
  
  // Custom styles for the demo
  const styles = {
    container: 'p-6 max-w-md mx-auto bg-white rounded-xl shadow-md',
    heading: 'text-xl font-bold text-gray-800 mb-4',
    fieldset: 'border border-gray-300 rounded p-4 mb-6',
    legend: 'px-2 font-medium text-gray-700',
    radioGroup: 'space-y-2',
    radioOption: 'flex items-center',
    radioInput: 'h-4 w-4 text-blue-600 focus:ring-blue-500',
    radioLabel: 'ml-2 text-gray-700',
    selectedValue: 'mt-2 text-sm text-blue-600 font-medium'
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Radio Button Component Examples</h1>
      
      {/* First radio group */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Choose your favorite color:</legend>
        <div className={styles.radioGroup}>
          {colorOptions.map((option) => (
            <div key={option.value} className={styles.radioOption}>
              <input
                type="radio"
                id={`color-${option.value}`}
                name="favoriteColor"
                value={option.value}
                checked={favoriteColor === option.value}
                onChange={(e) => setFavoriteColor(e.target.value)}
                className={styles.radioInput}
              />
              <label htmlFor={`color-${option.value}`} className={styles.radioLabel}>
                {option.label}
              </label>
            </div>
          ))}
        </div>

        
        <div className={styles.selectedValue}>Selected: {favoriteColor}</div>
      </fieldset>
      
      {/* Second radio group with different styling */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Choose your favorite framework:</legend>
        <div className={styles.radioGroup}>
          {frameworkOptions.map((option) => (
            <div key={option.value} className={styles.radioOption}>
              <input
                type="radio"
                id={`framework-${option.value}`}
                name="favoriteFramework"
                value={option.value}
                checked={favoriteFramework === option.value}
                onChange={(e) => setFavoriteFramework(e.target.value)}
                className={styles.radioInput}
              />
              <label htmlFor={`framework-${option.value}`} className={styles.radioLabel}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
        <div className={styles.selectedValue}>Selected: {favoriteFramework}</div>
      </fieldset>
    </div>
  );
}

export default RadioButtonDemo;