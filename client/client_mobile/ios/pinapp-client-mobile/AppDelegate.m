/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <Lock/A0Theme.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"pinapp-client-mobile"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  A0Theme *lockTheme = [[A0Theme alloc] init];
  [lockTheme registerColor:[UIColor colorWithRed:0.114 green:0.114 blue:0.114 alpha:1] forKey:A0ThemeScreenBackgroundColor];
  [lockTheme registerColor:[UIColor colorWithRed:0.263 green:0.263 blue:0.263 alpha:1] forKey:A0ThemePrimaryButtonNormalColor];
  [lockTheme registerColor:[UIColor colorWithRed:0.906 green:0.906 blue:0.906 alpha:1] forKey:A0ThemePrimaryButtonTextColor];
  [lockTheme registerColor:[UIColor colorWithRed:0.906 green:0.906 blue:0.906 alpha:1] forKey:A0ThemeTextFieldTextColor];
  [lockTheme registerColor:[UIColor colorWithRed:0.263 green:0.263 blue:0.263 alpha:1] forKey:A0ThemeTextFieldPlaceholderTextColor];
  [lockTheme registerColor:[UIColor colorWithRed:0.906 green:0.906 blue:0.906 alpha:1] forKey:A0ThemeTextFieldIconColor];
  [lockTheme registerColor:[UIColor colorWithRed:0.263 green:0.263 blue:0.263 alpha:0] forKey:A0ThemeTitleTextColor];
  [lockTheme registerColor:[UIColor colorWithRed:0.114 green:0.114 blue:0.114 alpha:1] forKey:A0ThemeIconBackgroundColor];
  [lockTheme registerColor:[UIColor colorWithRed:0.114 green:0.114 blue:0.114 alpha:0] forKey:A0ThemeCredentialBoxBorderColor];
  [lockTheme registerColor:[UIColor colorWithRed:0.263 green:0.263 blue:0.263 alpha:1] forKey:A0ThemeCredentialBoxSeparatorColor];
  [lockTheme registerColor:[UIColor colorWithRed:0.263 green:0.263 blue:0.263 alpha:0] forKey:A0ThemeSecondaryButtonBackgroundColor];
  [lockTheme registerColor:[UIColor colorWithRed:0.906 green:0.906 blue:0.906 alpha:1] forKey:A0ThemeSecondaryButtonTextColor];
  [lockTheme registerImageWithName:@"" bundle:[NSBundle mainBundle] forKey:A0ThemeIconImageName];
  
  [[A0Theme sharedInstance] registerTheme:lockTheme];
  
  return YES;
}

@end
