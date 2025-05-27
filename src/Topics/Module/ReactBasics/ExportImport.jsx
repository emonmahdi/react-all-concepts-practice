const ExportImport = () => {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "10px",
      }}
    >
      <div>
        <h2>What is Importing and Exporting in React?</h2>
        <p>
          In React, importing and exporting components refer to the process of
          sharing and using components across different files in your
          application. JavaScript’s import and export syntax allows you to bring
          in functions, objects, and components from one file into another,
          creating a modular and maintainable codebase.
        </p>

        <ul>
          <li>
            Exporting a component means making it available for use in other
            files.
          </li>
          <li>
            Importing a component means bringing it into another file to use it.
          </li>
        </ul>
      </div>
      <div>
        <h3>Types of Exports in React</h3>
        <p>There are two types of Export and Import</p>
        <ul>
          <li>
            Default Exports and Imports - A default export allows you to export
            a single component or variable from a file. When importing a default
            export, you can give it any name you choose.{" "}
          </li>
          <li>
            Named Exports and Imports - Named exports allow you to export
            multiple components or variables from a single file. When importing
            a named export, you must use the exact name of the exported entity.
          </li>
        </ul>
      </div>
      <div>
        <h3>When to Use Default Export</h3>
        <ul>
          <li>
            Use for a single primary functionality or component in a file.
          </li>
          <li>When you want flexibility in naming during import.</li>
          <li>
            Ideal for components or modules that represent the main purpose of
            the file
          </li>
        </ul>
      </div>
      <div>
        <h3>When to Use Named Export</h3>
        <ul>
          <li>
          Use when exporting multiple functionalities or components from the same file.
          </li>
          <li>When you want consistency in import names.</li>
          <li>
          Useful for utility functions, constants, or multiple related components.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExportImport;
