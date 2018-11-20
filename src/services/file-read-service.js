// @flow
var fs = window.require('fs')
var path = window.require('path')

export const loadPackageJson = (projectPath: string): Promise<void> => {

    return new Promise((resolve, reject) => {
        return fs.readFile(
            path.join(projectPath, 'package.json'),
            'utf8',
            (err, data) => {
                if (err) {
                    return reject(err);
                }

                return resolve(JSON.parse(data));
            }
        );
    });

}