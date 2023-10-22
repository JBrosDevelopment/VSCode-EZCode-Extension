const { createConnection, TextDocuments } = require('vscode-languageserver');
const jsonc = require('jsonc-parser');

const connection = createConnection();
const documents = new TextDocuments();

connection.onInitialize((params) => {
    return {
        capabilities: {
            textDocumentSync: documents.syncKind,
            completionProvider: {
                resolveProvider: false,
                triggerCharacters: [":", " ", "\n"]
            }
        }
    };
});

documents.onDidChangeContent((change) => {
    validateDocument(change.document);
});

function validateDocument(document) {
    const text = document.getText();
    const lines = text.split('\n');
    const currentLine = lines[document.position.line];
    const position = document.position.character;

    if (position === 0 || currentLine.charAt(position - 1) === ':') {
        const suggestions = ["if", "loop", "else"];
        connection.sendCompletionList({
            isIncomplete: false,
            items: suggestions.map(suggestion => ({
                label: suggestion,
                kind: 16, // Keyword kind
            })),
        });
    }
}

connection.onCompletion((textDocumentPosition) => {
    const document = documents.get(textDocumentPosition.textDocument.uri);
    if (document) {
        validateDocument(document);
    }
});

documents.listen(connection);
connection.listen();
