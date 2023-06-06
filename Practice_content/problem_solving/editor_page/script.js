 document.addEventListener("DOMContentLoaded", function () {
        var editor = ace.edit("editor");
        var languageSelect = document.getElementById("languageSelect");

        // Set initial language mode
        var initialLanguage = languageSelect.value;
        setEditorMode(initialLanguage);

        // Set language mode based on selection
        languageSelect.addEventListener("change", function () {
            var selectedLanguage = this.value;
            setEditorMode(selectedLanguage);
        });
        function setEditorMode(language) {
            var editorMode;
            var initialCode = "";

            switch (language) {
                case "python":
                    editorMode = "ace/mode/python";
                    initialCode = "if __name__ == '__main__':\n    # Your code here";
                    break;
                case "cpp":
                    editorMode = "ace/mode/c_cpp";
                    initialCode = "#include <iostream>\n\nint main() {\n    // Your code here\n    return 0;\n}";
                    break;
                case "java":
                    editorMode = "ace/mode/java";
                    initialCode = "public class Main {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}";
                    break;
                default:
                    editorMode = "ace/mode/text";
                    break;
            }
            editor.session.setMode(editorMode);
            editor.setValue(initialCode, -1); // Set initial code in the editor
        }

    });