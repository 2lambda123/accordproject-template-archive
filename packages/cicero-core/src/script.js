/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * <p>
 * An executable script.
 * </p>
 * @private
 * @class
 * @memberof module:cicero-core
 */
class Script {

    /**
     * Create the Script.
     * <p>
     * @param {ModelManager} modelManager - The ModelManager associated with this Script
     * @param {string} identifier - The identifier of the script
     * @param {string} language - The language type of the script
     * @param {string} contents - The contents of the script
     * @param {string} contractName - The name of the contract if known or null
     */
    constructor(modelManager, identifier, language, contents, contractName) {
        this.modelManager = modelManager;
        this.identifier = identifier;
        this.contractName = contractName;
        this.language = language;
        this.contents = contents;
        this.functions = [];
        this.tokens = [];

        if(!contents) {
            throw new Error('Empty script contents');
        }
    }

    /**
     * Returns the identifier of the script
     * @return {string} the identifier of the script
     */
    getIdentifier() {
        return this.identifier;
    }

    /**
     * Returns the name of the contract for this script
     * @return {string} the name of the contract, if known
     */
    getContractName() {
        return this.contractName;
    }

    /**
     * Returns the language of the script
     * @return {string} the language of the script
     */
    getLanguage() {
        return this.language;
    }

    /**
     * Returns the contents of the script
     * @return {string} the content of the script
     */
    getContents() {
        return this.contents;
    }

    /**
     * Returns the FunctionDeclaration for all functions that have been defined in this
     * Script.
     *
     * @return {FunctionDeclaration[]} The array of FunctionDeclarations
     */
    getFunctionDeclarations() {
        return this.functions;
    }

    /**
     * Returns the tokens of the script
     * @return {Object[]} the tokens of the script
     */
    getTokens() {
        return this.tokens;
    }

}

module.exports = Script;
