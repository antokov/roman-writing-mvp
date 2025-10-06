<!-- Generated 2025-10-06 12:46:19 -->
# roman-writing-mvp - Code Snapshot

## Projektstruktur
```
Auflistung der Ordnerpfade f³r Volume Boot
Volumeseriennummer : D072-BBC6
C:.
|   .gitattributes
|   .gitignore
|   code-snapshot.md
|   make-snapshot.ps1
|   README.md
|   
+---.venv
|   |   pyvenv.cfg
|   |   
|   +---Include
|   |   \---site
|   |       \---python3.12
|   |           \---greenlet
|   |                   greenlet.h
|   |                   
|   +---Lib
|   |   \---site-packages
|   |       |   typing_extensions.py
|   |       |   
|   |       +---blinker
|   |       |   |   base.py
|   |       |   |   py.typed
|   |       |   |   _utilities.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           base.cpython-312.pyc
|   |       |           _utilities.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---blinker-1.9.0.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE.txt
|   |       |       METADATA
|   |       |       RECORD
|   |       |       WHEEL
|   |       |       
|   |       +---click
|   |       |   |   core.py
|   |       |   |   decorators.py
|   |       |   |   exceptions.py
|   |       |   |   formatting.py
|   |       |   |   globals.py
|   |       |   |   parser.py
|   |       |   |   py.typed
|   |       |   |   shell_completion.py
|   |       |   |   termui.py
|   |       |   |   testing.py
|   |       |   |   types.py
|   |       |   |   utils.py
|   |       |   |   _compat.py
|   |       |   |   _termui_impl.py
|   |       |   |   _textwrap.py
|   |       |   |   _utils.py
|   |       |   |   _winconsole.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           core.cpython-312.pyc
|   |       |           decorators.cpython-312.pyc
|   |       |           exceptions.cpython-312.pyc
|   |       |           formatting.cpython-312.pyc
|   |       |           globals.cpython-312.pyc
|   |       |           parser.cpython-312.pyc
|   |       |           shell_completion.cpython-312.pyc
|   |       |           termui.cpython-312.pyc
|   |       |           testing.cpython-312.pyc
|   |       |           types.cpython-312.pyc
|   |       |           utils.cpython-312.pyc
|   |       |           _compat.cpython-312.pyc
|   |       |           _termui_impl.cpython-312.pyc
|   |       |           _textwrap.cpython-312.pyc
|   |       |           _utils.cpython-312.pyc
|   |       |           _winconsole.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---click-8.3.0.dist-info
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE.txt
|   |       |           
|   |       +---colorama
|   |       |   |   ansi.py
|   |       |   |   ansitowin32.py
|   |       |   |   initialise.py
|   |       |   |   win32.py
|   |       |   |   winterm.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   +---tests
|   |       |   |   |   ansitowin32_test.py
|   |       |   |   |   ansi_test.py
|   |       |   |   |   initialise_test.py
|   |       |   |   |   isatty_test.py
|   |       |   |   |   utils.py
|   |       |   |   |   winterm_test.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           ansitowin32_test.cpython-312.pyc
|   |       |   |           ansi_test.cpython-312.pyc
|   |       |   |           initialise_test.cpython-312.pyc
|   |       |   |           isatty_test.cpython-312.pyc
|   |       |   |           utils.cpython-312.pyc
|   |       |   |           winterm_test.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           ansi.cpython-312.pyc
|   |       |           ansitowin32.cpython-312.pyc
|   |       |           initialise.cpython-312.pyc
|   |       |           win32.cpython-312.pyc
|   |       |           winterm.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---colorama-0.4.6.dist-info
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE.txt
|   |       |           
|   |       +---flask
|   |       |   |   app.py
|   |       |   |   blueprints.py
|   |       |   |   cli.py
|   |       |   |   config.py
|   |       |   |   ctx.py
|   |       |   |   debughelpers.py
|   |       |   |   globals.py
|   |       |   |   helpers.py
|   |       |   |   logging.py
|   |       |   |   py.typed
|   |       |   |   sessions.py
|   |       |   |   signals.py
|   |       |   |   templating.py
|   |       |   |   testing.py
|   |       |   |   typing.py
|   |       |   |   views.py
|   |       |   |   wrappers.py
|   |       |   |   __init__.py
|   |       |   |   __main__.py
|   |       |   |   
|   |       |   +---json
|   |       |   |   |   provider.py
|   |       |   |   |   tag.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           provider.cpython-312.pyc
|   |       |   |           tag.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---sansio
|   |       |   |   |   app.py
|   |       |   |   |   blueprints.py
|   |       |   |   |   README.md
|   |       |   |   |   scaffold.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           app.cpython-312.pyc
|   |       |   |           blueprints.cpython-312.pyc
|   |       |   |           scaffold.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           app.cpython-312.pyc
|   |       |           blueprints.cpython-312.pyc
|   |       |           cli.cpython-312.pyc
|   |       |           config.cpython-312.pyc
|   |       |           ctx.cpython-312.pyc
|   |       |           debughelpers.cpython-312.pyc
|   |       |           globals.cpython-312.pyc
|   |       |           helpers.cpython-312.pyc
|   |       |           logging.cpython-312.pyc
|   |       |           sessions.cpython-312.pyc
|   |       |           signals.cpython-312.pyc
|   |       |           templating.cpython-312.pyc
|   |       |           testing.cpython-312.pyc
|   |       |           typing.cpython-312.pyc
|   |       |           views.cpython-312.pyc
|   |       |           wrappers.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           __main__.cpython-312.pyc
|   |       |           
|   |       +---flask-3.0.3.dist-info
|   |       |       entry_points.txt
|   |       |       INSTALLER
|   |       |       LICENSE.txt
|   |       |       METADATA
|   |       |       RECORD
|   |       |       REQUESTED
|   |       |       WHEEL
|   |       |       
|   |       +---flask_cors
|   |       |   |   core.py
|   |       |   |   decorator.py
|   |       |   |   extension.py
|   |       |   |   version.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           core.cpython-312.pyc
|   |       |           decorator.cpython-312.pyc
|   |       |           extension.cpython-312.pyc
|   |       |           version.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---Flask_Cors-4.0.1.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE
|   |       |       METADATA
|   |       |       RECORD
|   |       |       REQUESTED
|   |       |       top_level.txt
|   |       |       WHEEL
|   |       |       
|   |       +---flask_sqlalchemy
|   |       |   |   cli.py
|   |       |   |   extension.py
|   |       |   |   model.py
|   |       |   |   pagination.py
|   |       |   |   py.typed
|   |       |   |   query.py
|   |       |   |   record_queries.py
|   |       |   |   session.py
|   |       |   |   table.py
|   |       |   |   track_modifications.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           cli.cpython-312.pyc
|   |       |           extension.cpython-312.pyc
|   |       |           model.cpython-312.pyc
|   |       |           pagination.cpython-312.pyc
|   |       |           query.cpython-312.pyc
|   |       |           record_queries.cpython-312.pyc
|   |       |           session.cpython-312.pyc
|   |       |           table.cpython-312.pyc
|   |       |           track_modifications.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---flask_sqlalchemy-3.1.1.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE.rst
|   |       |       METADATA
|   |       |       RECORD
|   |       |       REQUESTED
|   |       |       WHEEL
|   |       |       
|   |       +---greenlet
|   |       |   |   CObjects.cpp
|   |       |   |   greenlet.cpp
|   |       |   |   greenlet.h
|   |       |   |   greenlet_allocator.hpp
|   |       |   |   greenlet_compiler_compat.hpp
|   |       |   |   greenlet_cpython_compat.hpp
|   |       |   |   greenlet_exceptions.hpp
|   |       |   |   greenlet_internal.hpp
|   |       |   |   greenlet_msvc_compat.hpp
|   |       |   |   greenlet_refs.hpp
|   |       |   |   greenlet_slp_switch.hpp
|   |       |   |   greenlet_thread_support.hpp
|   |       |   |   PyGreenlet.cpp
|   |       |   |   PyGreenlet.hpp
|   |       |   |   PyGreenletUnswitchable.cpp
|   |       |   |   PyModule.cpp
|   |       |   |   slp_platformselect.h
|   |       |   |   TBrokenGreenlet.cpp
|   |       |   |   TExceptionState.cpp
|   |       |   |   TGreenlet.cpp
|   |       |   |   TGreenlet.hpp
|   |       |   |   TGreenletGlobals.cpp
|   |       |   |   TMainGreenlet.cpp
|   |       |   |   TPythonState.cpp
|   |       |   |   TStackState.cpp
|   |       |   |   TThreadState.hpp
|   |       |   |   TThreadStateCreator.hpp
|   |       |   |   TThreadStateDestroy.cpp
|   |       |   |   TUserGreenlet.cpp
|   |       |   |   _greenlet.cp312-win_amd64.pyd
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   +---platform
|   |       |   |   |   setup_switch_x64_masm.cmd
|   |       |   |   |   switch_aarch64_gcc.h
|   |       |   |   |   switch_alpha_unix.h
|   |       |   |   |   switch_amd64_unix.h
|   |       |   |   |   switch_arm32_gcc.h
|   |       |   |   |   switch_arm32_ios.h
|   |       |   |   |   switch_arm64_masm.asm
|   |       |   |   |   switch_arm64_masm.obj
|   |       |   |   |   switch_arm64_msvc.h
|   |       |   |   |   switch_csky_gcc.h
|   |       |   |   |   switch_loongarch64_linux.h
|   |       |   |   |   switch_m68k_gcc.h
|   |       |   |   |   switch_mips_unix.h
|   |       |   |   |   switch_ppc64_aix.h
|   |       |   |   |   switch_ppc64_linux.h
|   |       |   |   |   switch_ppc_aix.h
|   |       |   |   |   switch_ppc_linux.h
|   |       |   |   |   switch_ppc_macosx.h
|   |       |   |   |   switch_ppc_unix.h
|   |       |   |   |   switch_riscv_unix.h
|   |       |   |   |   switch_s390_unix.h
|   |       |   |   |   switch_sh_gcc.h
|   |       |   |   |   switch_sparc_sun_gcc.h
|   |       |   |   |   switch_x32_unix.h
|   |       |   |   |   switch_x64_masm.asm
|   |       |   |   |   switch_x64_masm.obj
|   |       |   |   |   switch_x64_msvc.h
|   |       |   |   |   switch_x86_msvc.h
|   |       |   |   |   switch_x86_unix.h
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---tests
|   |       |   |   |   fail_clearing_run_switches.py
|   |       |   |   |   fail_cpp_exception.py
|   |       |   |   |   fail_initialstub_already_started.py
|   |       |   |   |   fail_slp_switch.py
|   |       |   |   |   fail_switch_three_greenlets.py
|   |       |   |   |   fail_switch_three_greenlets2.py
|   |       |   |   |   fail_switch_two_greenlets.py
|   |       |   |   |   leakcheck.py
|   |       |   |   |   test_contextvars.py
|   |       |   |   |   test_cpp.py
|   |       |   |   |   test_extension_interface.py
|   |       |   |   |   test_gc.py
|   |       |   |   |   test_generator.py
|   |       |   |   |   test_generator_nested.py
|   |       |   |   |   test_greenlet.py
|   |       |   |   |   test_greenlet_trash.py
|   |       |   |   |   test_leaks.py
|   |       |   |   |   test_stack_saved.py
|   |       |   |   |   test_throw.py
|   |       |   |   |   test_tracing.py
|   |       |   |   |   test_version.py
|   |       |   |   |   test_weakref.py
|   |       |   |   |   _test_extension.c
|   |       |   |   |   _test_extension.cp312-win_amd64.pyd
|   |       |   |   |   _test_extension_cpp.cp312-win_amd64.pyd
|   |       |   |   |   _test_extension_cpp.cpp
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           fail_clearing_run_switches.cpython-312.pyc
|   |       |   |           fail_cpp_exception.cpython-312.pyc
|   |       |   |           fail_initialstub_already_started.cpython-312.pyc
|   |       |   |           fail_slp_switch.cpython-312.pyc
|   |       |   |           fail_switch_three_greenlets.cpython-312.pyc
|   |       |   |           fail_switch_three_greenlets2.cpython-312.pyc
|   |       |   |           fail_switch_two_greenlets.cpython-312.pyc
|   |       |   |           leakcheck.cpython-312.pyc
|   |       |   |           test_contextvars.cpython-312.pyc
|   |       |   |           test_cpp.cpython-312.pyc
|   |       |   |           test_extension_interface.cpython-312.pyc
|   |       |   |           test_gc.cpython-312.pyc
|   |       |   |           test_generator.cpython-312.pyc
|   |       |   |           test_generator_nested.cpython-312.pyc
|   |       |   |           test_greenlet.cpython-312.pyc
|   |       |   |           test_greenlet_trash.cpython-312.pyc
|   |       |   |           test_leaks.cpython-312.pyc
|   |       |   |           test_stack_saved.cpython-312.pyc
|   |       |   |           test_throw.cpython-312.pyc
|   |       |   |           test_tracing.cpython-312.pyc
|   |       |   |           test_version.cpython-312.pyc
|   |       |   |           test_weakref.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---greenlet-3.2.4.dist-info
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   top_level.txt
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE
|   |       |           LICENSE.PSF
|   |       |           
|   |       +---itsdangerous
|   |       |   |   encoding.py
|   |       |   |   exc.py
|   |       |   |   py.typed
|   |       |   |   serializer.py
|   |       |   |   signer.py
|   |       |   |   timed.py
|   |       |   |   url_safe.py
|   |       |   |   _json.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           encoding.cpython-312.pyc
|   |       |           exc.cpython-312.pyc
|   |       |           serializer.cpython-312.pyc
|   |       |           signer.cpython-312.pyc
|   |       |           timed.cpython-312.pyc
|   |       |           url_safe.cpython-312.pyc
|   |       |           _json.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---itsdangerous-2.2.0.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE.txt
|   |       |       METADATA
|   |       |       RECORD
|   |       |       WHEEL
|   |       |       
|   |       +---jinja2
|   |       |   |   async_utils.py
|   |       |   |   bccache.py
|   |       |   |   compiler.py
|   |       |   |   constants.py
|   |       |   |   debug.py
|   |       |   |   defaults.py
|   |       |   |   environment.py
|   |       |   |   exceptions.py
|   |       |   |   ext.py
|   |       |   |   filters.py
|   |       |   |   idtracking.py
|   |       |   |   lexer.py
|   |       |   |   loaders.py
|   |       |   |   meta.py
|   |       |   |   nativetypes.py
|   |       |   |   nodes.py
|   |       |   |   optimizer.py
|   |       |   |   parser.py
|   |       |   |   py.typed
|   |       |   |   runtime.py
|   |       |   |   sandbox.py
|   |       |   |   tests.py
|   |       |   |   utils.py
|   |       |   |   visitor.py
|   |       |   |   _identifier.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           async_utils.cpython-312.pyc
|   |       |           bccache.cpython-312.pyc
|   |       |           compiler.cpython-312.pyc
|   |       |           constants.cpython-312.pyc
|   |       |           debug.cpython-312.pyc
|   |       |           defaults.cpython-312.pyc
|   |       |           environment.cpython-312.pyc
|   |       |           exceptions.cpython-312.pyc
|   |       |           ext.cpython-312.pyc
|   |       |           filters.cpython-312.pyc
|   |       |           idtracking.cpython-312.pyc
|   |       |           lexer.cpython-312.pyc
|   |       |           loaders.cpython-312.pyc
|   |       |           meta.cpython-312.pyc
|   |       |           nativetypes.cpython-312.pyc
|   |       |           nodes.cpython-312.pyc
|   |       |           optimizer.cpython-312.pyc
|   |       |           parser.cpython-312.pyc
|   |       |           runtime.cpython-312.pyc
|   |       |           sandbox.cpython-312.pyc
|   |       |           tests.cpython-312.pyc
|   |       |           utils.cpython-312.pyc
|   |       |           visitor.cpython-312.pyc
|   |       |           _identifier.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---jinja2-3.1.6.dist-info
|   |       |   |   entry_points.txt
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE.txt
|   |       |           
|   |       +---markupsafe
|   |       |   |   py.typed
|   |       |   |   _native.py
|   |       |   |   _speedups.c
|   |       |   |   _speedups.cp312-win_amd64.pyd
|   |       |   |   _speedups.pyi
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           _native.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---markupsafe-3.0.3.dist-info
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   top_level.txt
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE.txt
|   |       |           
|   |       +---pip
|   |       |   |   py.typed
|   |       |   |   __init__.py
|   |       |   |   __main__.py
|   |       |   |   __pip-runner__.py
|   |       |   |   
|   |       |   +---_internal
|   |       |   |   |   build_env.py
|   |       |   |   |   cache.py
|   |       |   |   |   configuration.py
|   |       |   |   |   exceptions.py
|   |       |   |   |   main.py
|   |       |   |   |   pyproject.py
|   |       |   |   |   self_outdated_check.py
|   |       |   |   |   wheel_builder.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---cli
|   |       |   |   |   |   autocompletion.py
|   |       |   |   |   |   base_command.py
|   |       |   |   |   |   cmdoptions.py
|   |       |   |   |   |   command_context.py
|   |       |   |   |   |   index_command.py
|   |       |   |   |   |   main.py
|   |       |   |   |   |   main_parser.py
|   |       |   |   |   |   parser.py
|   |       |   |   |   |   progress_bars.py
|   |       |   |   |   |   req_command.py
|   |       |   |   |   |   spinners.py
|   |       |   |   |   |   status_codes.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           autocompletion.cpython-312.pyc
|   |       |   |   |           base_command.cpython-312.pyc
|   |       |   |   |           cmdoptions.cpython-312.pyc
|   |       |   |   |           command_context.cpython-312.pyc
|   |       |   |   |           index_command.cpython-312.pyc
|   |       |   |   |           main.cpython-312.pyc
|   |       |   |   |           main_parser.cpython-312.pyc
|   |       |   |   |           parser.cpython-312.pyc
|   |       |   |   |           progress_bars.cpython-312.pyc
|   |       |   |   |           req_command.cpython-312.pyc
|   |       |   |   |           spinners.cpython-312.pyc
|   |       |   |   |           status_codes.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---commands
|   |       |   |   |   |   cache.py
|   |       |   |   |   |   check.py
|   |       |   |   |   |   completion.py
|   |       |   |   |   |   configuration.py
|   |       |   |   |   |   debug.py
|   |       |   |   |   |   download.py
|   |       |   |   |   |   freeze.py
|   |       |   |   |   |   hash.py
|   |       |   |   |   |   help.py
|   |       |   |   |   |   index.py
|   |       |   |   |   |   inspect.py
|   |       |   |   |   |   install.py
|   |       |   |   |   |   list.py
|   |       |   |   |   |   search.py
|   |       |   |   |   |   show.py
|   |       |   |   |   |   uninstall.py
|   |       |   |   |   |   wheel.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           cache.cpython-312.pyc
|   |       |   |   |           check.cpython-312.pyc
|   |       |   |   |           completion.cpython-312.pyc
|   |       |   |   |           configuration.cpython-312.pyc
|   |       |   |   |           debug.cpython-312.pyc
|   |       |   |   |           download.cpython-312.pyc
|   |       |   |   |           freeze.cpython-312.pyc
|   |       |   |   |           hash.cpython-312.pyc
|   |       |   |   |           help.cpython-312.pyc
|   |       |   |   |           index.cpython-312.pyc
|   |       |   |   |           inspect.cpython-312.pyc
|   |       |   |   |           install.cpython-312.pyc
|   |       |   |   |           list.cpython-312.pyc
|   |       |   |   |           search.cpython-312.pyc
|   |       |   |   |           show.cpython-312.pyc
|   |       |   |   |           uninstall.cpython-312.pyc
|   |       |   |   |           wheel.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---distributions
|   |       |   |   |   |   base.py
|   |       |   |   |   |   installed.py
|   |       |   |   |   |   sdist.py
|   |       |   |   |   |   wheel.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           installed.cpython-312.pyc
|   |       |   |   |           sdist.cpython-312.pyc
|   |       |   |   |           wheel.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---index
|   |       |   |   |   |   collector.py
|   |       |   |   |   |   package_finder.py
|   |       |   |   |   |   sources.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           collector.cpython-312.pyc
|   |       |   |   |           package_finder.cpython-312.pyc
|   |       |   |   |           sources.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---locations
|   |       |   |   |   |   base.py
|   |       |   |   |   |   _distutils.py
|   |       |   |   |   |   _sysconfig.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           _distutils.cpython-312.pyc
|   |       |   |   |           _sysconfig.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---metadata
|   |       |   |   |   |   base.py
|   |       |   |   |   |   pkg_resources.py
|   |       |   |   |   |   _json.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---importlib
|   |       |   |   |   |   |   _compat.py
|   |       |   |   |   |   |   _dists.py
|   |       |   |   |   |   |   _envs.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           _compat.cpython-312.pyc
|   |       |   |   |   |           _dists.cpython-312.pyc
|   |       |   |   |   |           _envs.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           pkg_resources.cpython-312.pyc
|   |       |   |   |           _json.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---models
|   |       |   |   |   |   candidate.py
|   |       |   |   |   |   direct_url.py
|   |       |   |   |   |   format_control.py
|   |       |   |   |   |   index.py
|   |       |   |   |   |   installation_report.py
|   |       |   |   |   |   link.py
|   |       |   |   |   |   scheme.py
|   |       |   |   |   |   search_scope.py
|   |       |   |   |   |   selection_prefs.py
|   |       |   |   |   |   target_python.py
|   |       |   |   |   |   wheel.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           candidate.cpython-312.pyc
|   |       |   |   |           direct_url.cpython-312.pyc
|   |       |   |   |           format_control.cpython-312.pyc
|   |       |   |   |           index.cpython-312.pyc
|   |       |   |   |           installation_report.cpython-312.pyc
|   |       |   |   |           link.cpython-312.pyc
|   |       |   |   |           scheme.cpython-312.pyc
|   |       |   |   |           search_scope.cpython-312.pyc
|   |       |   |   |           selection_prefs.cpython-312.pyc
|   |       |   |   |           target_python.cpython-312.pyc
|   |       |   |   |           wheel.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---network
|   |       |   |   |   |   auth.py
|   |       |   |   |   |   cache.py
|   |       |   |   |   |   download.py
|   |       |   |   |   |   lazy_wheel.py
|   |       |   |   |   |   session.py
|   |       |   |   |   |   utils.py
|   |       |   |   |   |   xmlrpc.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           auth.cpython-312.pyc
|   |       |   |   |           cache.cpython-312.pyc
|   |       |   |   |           download.cpython-312.pyc
|   |       |   |   |           lazy_wheel.cpython-312.pyc
|   |       |   |   |           session.cpython-312.pyc
|   |       |   |   |           utils.cpython-312.pyc
|   |       |   |   |           xmlrpc.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---operations
|   |       |   |   |   |   check.py
|   |       |   |   |   |   freeze.py
|   |       |   |   |   |   prepare.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---build
|   |       |   |   |   |   |   build_tracker.py
|   |       |   |   |   |   |   metadata.py
|   |       |   |   |   |   |   metadata_editable.py
|   |       |   |   |   |   |   metadata_legacy.py
|   |       |   |   |   |   |   wheel.py
|   |       |   |   |   |   |   wheel_editable.py
|   |       |   |   |   |   |   wheel_legacy.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           build_tracker.cpython-312.pyc
|   |       |   |   |   |           metadata.cpython-312.pyc
|   |       |   |   |   |           metadata_editable.cpython-312.pyc
|   |       |   |   |   |           metadata_legacy.cpython-312.pyc
|   |       |   |   |   |           wheel.cpython-312.pyc
|   |       |   |   |   |           wheel_editable.cpython-312.pyc
|   |       |   |   |   |           wheel_legacy.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---install
|   |       |   |   |   |   |   editable_legacy.py
|   |       |   |   |   |   |   wheel.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           editable_legacy.cpython-312.pyc
|   |       |   |   |   |           wheel.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           check.cpython-312.pyc
|   |       |   |   |           freeze.cpython-312.pyc
|   |       |   |   |           prepare.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---req
|   |       |   |   |   |   constructors.py
|   |       |   |   |   |   req_file.py
|   |       |   |   |   |   req_install.py
|   |       |   |   |   |   req_set.py
|   |       |   |   |   |   req_uninstall.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           constructors.cpython-312.pyc
|   |       |   |   |           req_file.cpython-312.pyc
|   |       |   |   |           req_install.cpython-312.pyc
|   |       |   |   |           req_set.cpython-312.pyc
|   |       |   |   |           req_uninstall.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---resolution
|   |       |   |   |   |   base.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---legacy
|   |       |   |   |   |   |   resolver.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           resolver.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---resolvelib
|   |       |   |   |   |   |   base.py
|   |       |   |   |   |   |   candidates.py
|   |       |   |   |   |   |   factory.py
|   |       |   |   |   |   |   found_candidates.py
|   |       |   |   |   |   |   provider.py
|   |       |   |   |   |   |   reporter.py
|   |       |   |   |   |   |   requirements.py
|   |       |   |   |   |   |   resolver.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           base.cpython-312.pyc
|   |       |   |   |   |           candidates.cpython-312.pyc
|   |       |   |   |   |           factory.cpython-312.pyc
|   |       |   |   |   |           found_candidates.cpython-312.pyc
|   |       |   |   |   |           provider.cpython-312.pyc
|   |       |   |   |   |           reporter.cpython-312.pyc
|   |       |   |   |   |           requirements.cpython-312.pyc
|   |       |   |   |   |           resolver.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---utils
|   |       |   |   |   |   appdirs.py
|   |       |   |   |   |   compat.py
|   |       |   |   |   |   compatibility_tags.py
|   |       |   |   |   |   datetime.py
|   |       |   |   |   |   deprecation.py
|   |       |   |   |   |   direct_url_helpers.py
|   |       |   |   |   |   egg_link.py
|   |       |   |   |   |   encoding.py
|   |       |   |   |   |   entrypoints.py
|   |       |   |   |   |   filesystem.py
|   |       |   |   |   |   filetypes.py
|   |       |   |   |   |   glibc.py
|   |       |   |   |   |   hashes.py
|   |       |   |   |   |   logging.py
|   |       |   |   |   |   misc.py
|   |       |   |   |   |   packaging.py
|   |       |   |   |   |   retry.py
|   |       |   |   |   |   setuptools_build.py
|   |       |   |   |   |   subprocess.py
|   |       |   |   |   |   temp_dir.py
|   |       |   |   |   |   unpacking.py
|   |       |   |   |   |   urls.py
|   |       |   |   |   |   virtualenv.py
|   |       |   |   |   |   wheel.py
|   |       |   |   |   |   _jaraco_text.py
|   |       |   |   |   |   _log.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           appdirs.cpython-312.pyc
|   |       |   |   |           compat.cpython-312.pyc
|   |       |   |   |           compatibility_tags.cpython-312.pyc
|   |       |   |   |           datetime.cpython-312.pyc
|   |       |   |   |           deprecation.cpython-312.pyc
|   |       |   |   |           direct_url_helpers.cpython-312.pyc
|   |       |   |   |           egg_link.cpython-312.pyc
|   |       |   |   |           encoding.cpython-312.pyc
|   |       |   |   |           entrypoints.cpython-312.pyc
|   |       |   |   |           filesystem.cpython-312.pyc
|   |       |   |   |           filetypes.cpython-312.pyc
|   |       |   |   |           glibc.cpython-312.pyc
|   |       |   |   |           hashes.cpython-312.pyc
|   |       |   |   |           logging.cpython-312.pyc
|   |       |   |   |           misc.cpython-312.pyc
|   |       |   |   |           packaging.cpython-312.pyc
|   |       |   |   |           retry.cpython-312.pyc
|   |       |   |   |           setuptools_build.cpython-312.pyc
|   |       |   |   |           subprocess.cpython-312.pyc
|   |       |   |   |           temp_dir.cpython-312.pyc
|   |       |   |   |           unpacking.cpython-312.pyc
|   |       |   |   |           urls.cpython-312.pyc
|   |       |   |   |           virtualenv.cpython-312.pyc
|   |       |   |   |           wheel.cpython-312.pyc
|   |       |   |   |           _jaraco_text.cpython-312.pyc
|   |       |   |   |           _log.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---vcs
|   |       |   |   |   |   bazaar.py
|   |       |   |   |   |   git.py
|   |       |   |   |   |   mercurial.py
|   |       |   |   |   |   subversion.py
|   |       |   |   |   |   versioncontrol.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           bazaar.cpython-312.pyc
|   |       |   |   |           git.cpython-312.pyc
|   |       |   |   |           mercurial.cpython-312.pyc
|   |       |   |   |           subversion.cpython-312.pyc
|   |       |   |   |           versioncontrol.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   \---__pycache__
|   |       |   |           build_env.cpython-312.pyc
|   |       |   |           cache.cpython-312.pyc
|   |       |   |           configuration.cpython-312.pyc
|   |       |   |           exceptions.cpython-312.pyc
|   |       |   |           main.cpython-312.pyc
|   |       |   |           pyproject.cpython-312.pyc
|   |       |   |           self_outdated_check.cpython-312.pyc
|   |       |   |           wheel_builder.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---_vendor
|   |       |   |   |   typing_extensions.py
|   |       |   |   |   vendor.txt
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---cachecontrol
|   |       |   |   |   |   adapter.py
|   |       |   |   |   |   cache.py
|   |       |   |   |   |   controller.py
|   |       |   |   |   |   filewrapper.py
|   |       |   |   |   |   heuristics.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   serialize.py
|   |       |   |   |   |   wrapper.py
|   |       |   |   |   |   _cmd.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---caches
|   |       |   |   |   |   |   file_cache.py
|   |       |   |   |   |   |   redis_cache.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           file_cache.cpython-312.pyc
|   |       |   |   |   |           redis_cache.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           adapter.cpython-312.pyc
|   |       |   |   |           cache.cpython-312.pyc
|   |       |   |   |           controller.cpython-312.pyc
|   |       |   |   |           filewrapper.cpython-312.pyc
|   |       |   |   |           heuristics.cpython-312.pyc
|   |       |   |   |           serialize.cpython-312.pyc
|   |       |   |   |           wrapper.cpython-312.pyc
|   |       |   |   |           _cmd.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---certifi
|   |       |   |   |   |   cacert.pem
|   |       |   |   |   |   core.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __main__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           core.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __main__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---distlib
|   |       |   |   |   |   compat.py
|   |       |   |   |   |   database.py
|   |       |   |   |   |   index.py
|   |       |   |   |   |   locators.py
|   |       |   |   |   |   manifest.py
|   |       |   |   |   |   markers.py
|   |       |   |   |   |   metadata.py
|   |       |   |   |   |   resources.py
|   |       |   |   |   |   scripts.py
|   |       |   |   |   |   t32.exe
|   |       |   |   |   |   t64-arm.exe
|   |       |   |   |   |   t64.exe
|   |       |   |   |   |   util.py
|   |       |   |   |   |   version.py
|   |       |   |   |   |   w32.exe
|   |       |   |   |   |   w64-arm.exe
|   |       |   |   |   |   w64.exe
|   |       |   |   |   |   wheel.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           compat.cpython-312.pyc
|   |       |   |   |           database.cpython-312.pyc
|   |       |   |   |           index.cpython-312.pyc
|   |       |   |   |           locators.cpython-312.pyc
|   |       |   |   |           manifest.cpython-312.pyc
|   |       |   |   |           markers.cpython-312.pyc
|   |       |   |   |           metadata.cpython-312.pyc
|   |       |   |   |           resources.cpython-312.pyc
|   |       |   |   |           scripts.cpython-312.pyc
|   |       |   |   |           util.cpython-312.pyc
|   |       |   |   |           version.cpython-312.pyc
|   |       |   |   |           wheel.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---distro
|   |       |   |   |   |   distro.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __main__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           distro.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __main__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---idna
|   |       |   |   |   |   codec.py
|   |       |   |   |   |   compat.py
|   |       |   |   |   |   core.py
|   |       |   |   |   |   idnadata.py
|   |       |   |   |   |   intranges.py
|   |       |   |   |   |   package_data.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   uts46data.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           codec.cpython-312.pyc
|   |       |   |   |           compat.cpython-312.pyc
|   |       |   |   |           core.cpython-312.pyc
|   |       |   |   |           idnadata.cpython-312.pyc
|   |       |   |   |           intranges.cpython-312.pyc
|   |       |   |   |           package_data.cpython-312.pyc
|   |       |   |   |           uts46data.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---msgpack
|   |       |   |   |   |   exceptions.py
|   |       |   |   |   |   ext.py
|   |       |   |   |   |   fallback.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           exceptions.cpython-312.pyc
|   |       |   |   |           ext.cpython-312.pyc
|   |       |   |   |           fallback.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---packaging
|   |       |   |   |   |   markers.py
|   |       |   |   |   |   metadata.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   requirements.py
|   |       |   |   |   |   specifiers.py
|   |       |   |   |   |   tags.py
|   |       |   |   |   |   utils.py
|   |       |   |   |   |   version.py
|   |       |   |   |   |   _elffile.py
|   |       |   |   |   |   _manylinux.py
|   |       |   |   |   |   _musllinux.py
|   |       |   |   |   |   _parser.py
|   |       |   |   |   |   _structures.py
|   |       |   |   |   |   _tokenizer.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           markers.cpython-312.pyc
|   |       |   |   |           metadata.cpython-312.pyc
|   |       |   |   |           requirements.cpython-312.pyc
|   |       |   |   |           specifiers.cpython-312.pyc
|   |       |   |   |           tags.cpython-312.pyc
|   |       |   |   |           utils.cpython-312.pyc
|   |       |   |   |           version.cpython-312.pyc
|   |       |   |   |           _elffile.cpython-312.pyc
|   |       |   |   |           _manylinux.cpython-312.pyc
|   |       |   |   |           _musllinux.cpython-312.pyc
|   |       |   |   |           _parser.cpython-312.pyc
|   |       |   |   |           _structures.cpython-312.pyc
|   |       |   |   |           _tokenizer.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---pkg_resources
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---platformdirs
|   |       |   |   |   |   android.py
|   |       |   |   |   |   api.py
|   |       |   |   |   |   macos.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   unix.py
|   |       |   |   |   |   version.py
|   |       |   |   |   |   windows.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __main__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           android.cpython-312.pyc
|   |       |   |   |           api.cpython-312.pyc
|   |       |   |   |           macos.cpython-312.pyc
|   |       |   |   |           unix.cpython-312.pyc
|   |       |   |   |           version.cpython-312.pyc
|   |       |   |   |           windows.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __main__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---pygments
|   |       |   |   |   |   cmdline.py
|   |       |   |   |   |   console.py
|   |       |   |   |   |   filter.py
|   |       |   |   |   |   formatter.py
|   |       |   |   |   |   lexer.py
|   |       |   |   |   |   modeline.py
|   |       |   |   |   |   plugin.py
|   |       |   |   |   |   regexopt.py
|   |       |   |   |   |   scanner.py
|   |       |   |   |   |   sphinxext.py
|   |       |   |   |   |   style.py
|   |       |   |   |   |   token.py
|   |       |   |   |   |   unistring.py
|   |       |   |   |   |   util.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __main__.py
|   |       |   |   |   |   
|   |       |   |   |   +---filters
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---formatters
|   |       |   |   |   |   |   bbcode.py
|   |       |   |   |   |   |   groff.py
|   |       |   |   |   |   |   html.py
|   |       |   |   |   |   |   img.py
|   |       |   |   |   |   |   irc.py
|   |       |   |   |   |   |   latex.py
|   |       |   |   |   |   |   other.py
|   |       |   |   |   |   |   pangomarkup.py
|   |       |   |   |   |   |   rtf.py
|   |       |   |   |   |   |   svg.py
|   |       |   |   |   |   |   terminal.py
|   |       |   |   |   |   |   terminal256.py
|   |       |   |   |   |   |   _mapping.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           bbcode.cpython-312.pyc
|   |       |   |   |   |           groff.cpython-312.pyc
|   |       |   |   |   |           html.cpython-312.pyc
|   |       |   |   |   |           img.cpython-312.pyc
|   |       |   |   |   |           irc.cpython-312.pyc
|   |       |   |   |   |           latex.cpython-312.pyc
|   |       |   |   |   |           other.cpython-312.pyc
|   |       |   |   |   |           pangomarkup.cpython-312.pyc
|   |       |   |   |   |           rtf.cpython-312.pyc
|   |       |   |   |   |           svg.cpython-312.pyc
|   |       |   |   |   |           terminal.cpython-312.pyc
|   |       |   |   |   |           terminal256.cpython-312.pyc
|   |       |   |   |   |           _mapping.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---lexers
|   |       |   |   |   |   |   python.py
|   |       |   |   |   |   |   _mapping.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           python.cpython-312.pyc
|   |       |   |   |   |           _mapping.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---styles
|   |       |   |   |   |   |   _mapping.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           _mapping.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           cmdline.cpython-312.pyc
|   |       |   |   |           console.cpython-312.pyc
|   |       |   |   |           filter.cpython-312.pyc
|   |       |   |   |           formatter.cpython-312.pyc
|   |       |   |   |           lexer.cpython-312.pyc
|   |       |   |   |           modeline.cpython-312.pyc
|   |       |   |   |           plugin.cpython-312.pyc
|   |       |   |   |           regexopt.cpython-312.pyc
|   |       |   |   |           scanner.cpython-312.pyc
|   |       |   |   |           sphinxext.cpython-312.pyc
|   |       |   |   |           style.cpython-312.pyc
|   |       |   |   |           token.cpython-312.pyc
|   |       |   |   |           unistring.cpython-312.pyc
|   |       |   |   |           util.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __main__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---pyproject_hooks
|   |       |   |   |   |   _compat.py
|   |       |   |   |   |   _impl.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---_in_process
|   |       |   |   |   |   |   _in_process.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           _in_process.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           _compat.cpython-312.pyc
|   |       |   |   |           _impl.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---requests
|   |       |   |   |   |   adapters.py
|   |       |   |   |   |   api.py
|   |       |   |   |   |   auth.py
|   |       |   |   |   |   certs.py
|   |       |   |   |   |   compat.py
|   |       |   |   |   |   cookies.py
|   |       |   |   |   |   exceptions.py
|   |       |   |   |   |   help.py
|   |       |   |   |   |   hooks.py
|   |       |   |   |   |   models.py
|   |       |   |   |   |   packages.py
|   |       |   |   |   |   sessions.py
|   |       |   |   |   |   status_codes.py
|   |       |   |   |   |   structures.py
|   |       |   |   |   |   utils.py
|   |       |   |   |   |   _internal_utils.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __version__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           adapters.cpython-312.pyc
|   |       |   |   |           api.cpython-312.pyc
|   |       |   |   |           auth.cpython-312.pyc
|   |       |   |   |           certs.cpython-312.pyc
|   |       |   |   |           compat.cpython-312.pyc
|   |       |   |   |           cookies.cpython-312.pyc
|   |       |   |   |           exceptions.cpython-312.pyc
|   |       |   |   |           help.cpython-312.pyc
|   |       |   |   |           hooks.cpython-312.pyc
|   |       |   |   |           models.cpython-312.pyc
|   |       |   |   |           packages.cpython-312.pyc
|   |       |   |   |           sessions.cpython-312.pyc
|   |       |   |   |           status_codes.cpython-312.pyc
|   |       |   |   |           structures.cpython-312.pyc
|   |       |   |   |           utils.cpython-312.pyc
|   |       |   |   |           _internal_utils.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __version__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---resolvelib
|   |       |   |   |   |   providers.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   reporters.py
|   |       |   |   |   |   resolvers.py
|   |       |   |   |   |   structs.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---compat
|   |       |   |   |   |   |   collections_abc.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           collections_abc.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           providers.cpython-312.pyc
|   |       |   |   |           reporters.cpython-312.pyc
|   |       |   |   |           resolvers.cpython-312.pyc
|   |       |   |   |           structs.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---rich
|   |       |   |   |   |   abc.py
|   |       |   |   |   |   align.py
|   |       |   |   |   |   ansi.py
|   |       |   |   |   |   bar.py
|   |       |   |   |   |   box.py
|   |       |   |   |   |   cells.py
|   |       |   |   |   |   color.py
|   |       |   |   |   |   color_triplet.py
|   |       |   |   |   |   columns.py
|   |       |   |   |   |   console.py
|   |       |   |   |   |   constrain.py
|   |       |   |   |   |   containers.py
|   |       |   |   |   |   control.py
|   |       |   |   |   |   default_styles.py
|   |       |   |   |   |   diagnose.py
|   |       |   |   |   |   emoji.py
|   |       |   |   |   |   errors.py
|   |       |   |   |   |   filesize.py
|   |       |   |   |   |   file_proxy.py
|   |       |   |   |   |   highlighter.py
|   |       |   |   |   |   json.py
|   |       |   |   |   |   jupyter.py
|   |       |   |   |   |   layout.py
|   |       |   |   |   |   live.py
|   |       |   |   |   |   live_render.py
|   |       |   |   |   |   logging.py
|   |       |   |   |   |   markup.py
|   |       |   |   |   |   measure.py
|   |       |   |   |   |   padding.py
|   |       |   |   |   |   pager.py
|   |       |   |   |   |   palette.py
|   |       |   |   |   |   panel.py
|   |       |   |   |   |   pretty.py
|   |       |   |   |   |   progress.py
|   |       |   |   |   |   progress_bar.py
|   |       |   |   |   |   prompt.py
|   |       |   |   |   |   protocol.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   region.py
|   |       |   |   |   |   repr.py
|   |       |   |   |   |   rule.py
|   |       |   |   |   |   scope.py
|   |       |   |   |   |   screen.py
|   |       |   |   |   |   segment.py
|   |       |   |   |   |   spinner.py
|   |       |   |   |   |   status.py
|   |       |   |   |   |   style.py
|   |       |   |   |   |   styled.py
|   |       |   |   |   |   syntax.py
|   |       |   |   |   |   table.py
|   |       |   |   |   |   terminal_theme.py
|   |       |   |   |   |   text.py
|   |       |   |   |   |   theme.py
|   |       |   |   |   |   themes.py
|   |       |   |   |   |   traceback.py
|   |       |   |   |   |   tree.py
|   |       |   |   |   |   _cell_widths.py
|   |       |   |   |   |   _emoji_codes.py
|   |       |   |   |   |   _emoji_replace.py
|   |       |   |   |   |   _export_format.py
|   |       |   |   |   |   _extension.py
|   |       |   |   |   |   _fileno.py
|   |       |   |   |   |   _inspect.py
|   |       |   |   |   |   _log_render.py
|   |       |   |   |   |   _loop.py
|   |       |   |   |   |   _null_file.py
|   |       |   |   |   |   _palettes.py
|   |       |   |   |   |   _pick.py
|   |       |   |   |   |   _ratio.py
|   |       |   |   |   |   _spinners.py
|   |       |   |   |   |   _stack.py
|   |       |   |   |   |   _timer.py
|   |       |   |   |   |   _win32_console.py
|   |       |   |   |   |   _windows.py
|   |       |   |   |   |   _windows_renderer.py
|   |       |   |   |   |   _wrap.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __main__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           abc.cpython-312.pyc
|   |       |   |   |           align.cpython-312.pyc
|   |       |   |   |           ansi.cpython-312.pyc
|   |       |   |   |           bar.cpython-312.pyc
|   |       |   |   |           box.cpython-312.pyc
|   |       |   |   |           cells.cpython-312.pyc
|   |       |   |   |           color.cpython-312.pyc
|   |       |   |   |           color_triplet.cpython-312.pyc
|   |       |   |   |           columns.cpython-312.pyc
|   |       |   |   |           console.cpython-312.pyc
|   |       |   |   |           constrain.cpython-312.pyc
|   |       |   |   |           containers.cpython-312.pyc
|   |       |   |   |           control.cpython-312.pyc
|   |       |   |   |           default_styles.cpython-312.pyc
|   |       |   |   |           diagnose.cpython-312.pyc
|   |       |   |   |           emoji.cpython-312.pyc
|   |       |   |   |           errors.cpython-312.pyc
|   |       |   |   |           filesize.cpython-312.pyc
|   |       |   |   |           file_proxy.cpython-312.pyc
|   |       |   |   |           highlighter.cpython-312.pyc
|   |       |   |   |           json.cpython-312.pyc
|   |       |   |   |           jupyter.cpython-312.pyc
|   |       |   |   |           layout.cpython-312.pyc
|   |       |   |   |           live.cpython-312.pyc
|   |       |   |   |           live_render.cpython-312.pyc
|   |       |   |   |           logging.cpython-312.pyc
|   |       |   |   |           markup.cpython-312.pyc
|   |       |   |   |           measure.cpython-312.pyc
|   |       |   |   |           padding.cpython-312.pyc
|   |       |   |   |           pager.cpython-312.pyc
|   |       |   |   |           palette.cpython-312.pyc
|   |       |   |   |           panel.cpython-312.pyc
|   |       |   |   |           pretty.cpython-312.pyc
|   |       |   |   |           progress.cpython-312.pyc
|   |       |   |   |           progress_bar.cpython-312.pyc
|   |       |   |   |           prompt.cpython-312.pyc
|   |       |   |   |           protocol.cpython-312.pyc
|   |       |   |   |           region.cpython-312.pyc
|   |       |   |   |           repr.cpython-312.pyc
|   |       |   |   |           rule.cpython-312.pyc
|   |       |   |   |           scope.cpython-312.pyc
|   |       |   |   |           screen.cpython-312.pyc
|   |       |   |   |           segment.cpython-312.pyc
|   |       |   |   |           spinner.cpython-312.pyc
|   |       |   |   |           status.cpython-312.pyc
|   |       |   |   |           style.cpython-312.pyc
|   |       |   |   |           styled.cpython-312.pyc
|   |       |   |   |           syntax.cpython-312.pyc
|   |       |   |   |           table.cpython-312.pyc
|   |       |   |   |           terminal_theme.cpython-312.pyc
|   |       |   |   |           text.cpython-312.pyc
|   |       |   |   |           theme.cpython-312.pyc
|   |       |   |   |           themes.cpython-312.pyc
|   |       |   |   |           traceback.cpython-312.pyc
|   |       |   |   |           tree.cpython-312.pyc
|   |       |   |   |           _cell_widths.cpython-312.pyc
|   |       |   |   |           _emoji_codes.cpython-312.pyc
|   |       |   |   |           _emoji_replace.cpython-312.pyc
|   |       |   |   |           _export_format.cpython-312.pyc
|   |       |   |   |           _extension.cpython-312.pyc
|   |       |   |   |           _fileno.cpython-312.pyc
|   |       |   |   |           _inspect.cpython-312.pyc
|   |       |   |   |           _log_render.cpython-312.pyc
|   |       |   |   |           _loop.cpython-312.pyc
|   |       |   |   |           _null_file.cpython-312.pyc
|   |       |   |   |           _palettes.cpython-312.pyc
|   |       |   |   |           _pick.cpython-312.pyc
|   |       |   |   |           _ratio.cpython-312.pyc
|   |       |   |   |           _spinners.cpython-312.pyc
|   |       |   |   |           _stack.cpython-312.pyc
|   |       |   |   |           _timer.cpython-312.pyc
|   |       |   |   |           _win32_console.cpython-312.pyc
|   |       |   |   |           _windows.cpython-312.pyc
|   |       |   |   |           _windows_renderer.cpython-312.pyc
|   |       |   |   |           _wrap.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __main__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---tomli
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   _parser.py
|   |       |   |   |   |   _re.py
|   |       |   |   |   |   _types.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           _parser.cpython-312.pyc
|   |       |   |   |           _re.cpython-312.pyc
|   |       |   |   |           _types.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---truststore
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   _api.py
|   |       |   |   |   |   _macos.py
|   |       |   |   |   |   _openssl.py
|   |       |   |   |   |   _ssl_constants.py
|   |       |   |   |   |   _windows.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           _api.cpython-312.pyc
|   |       |   |   |           _macos.cpython-312.pyc
|   |       |   |   |           _openssl.cpython-312.pyc
|   |       |   |   |           _ssl_constants.cpython-312.pyc
|   |       |   |   |           _windows.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---urllib3
|   |       |   |   |   |   connection.py
|   |       |   |   |   |   connectionpool.py
|   |       |   |   |   |   exceptions.py
|   |       |   |   |   |   fields.py
|   |       |   |   |   |   filepost.py
|   |       |   |   |   |   poolmanager.py
|   |       |   |   |   |   request.py
|   |       |   |   |   |   response.py
|   |       |   |   |   |   _collections.py
|   |       |   |   |   |   _version.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---contrib
|   |       |   |   |   |   |   appengine.py
|   |       |   |   |   |   |   ntlmpool.py
|   |       |   |   |   |   |   pyopenssl.py
|   |       |   |   |   |   |   securetransport.py
|   |       |   |   |   |   |   socks.py
|   |       |   |   |   |   |   _appengine_environ.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   +---_securetransport
|   |       |   |   |   |   |   |   bindings.py
|   |       |   |   |   |   |   |   low_level.py
|   |       |   |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   |   
|   |       |   |   |   |   |   \---__pycache__
|   |       |   |   |   |   |           bindings.cpython-312.pyc
|   |       |   |   |   |   |           low_level.cpython-312.pyc
|   |       |   |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |   |           
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           appengine.cpython-312.pyc
|   |       |   |   |   |           ntlmpool.cpython-312.pyc
|   |       |   |   |   |           pyopenssl.cpython-312.pyc
|   |       |   |   |   |           securetransport.cpython-312.pyc
|   |       |   |   |   |           socks.cpython-312.pyc
|   |       |   |   |   |           _appengine_environ.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---packages
|   |       |   |   |   |   |   six.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   +---backports
|   |       |   |   |   |   |   |   makefile.py
|   |       |   |   |   |   |   |   weakref_finalize.py
|   |       |   |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   |   
|   |       |   |   |   |   |   \---__pycache__
|   |       |   |   |   |   |           makefile.cpython-312.pyc
|   |       |   |   |   |   |           weakref_finalize.cpython-312.pyc
|   |       |   |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |   |           
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           six.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---util
|   |       |   |   |   |   |   connection.py
|   |       |   |   |   |   |   proxy.py
|   |       |   |   |   |   |   queue.py
|   |       |   |   |   |   |   request.py
|   |       |   |   |   |   |   response.py
|   |       |   |   |   |   |   retry.py
|   |       |   |   |   |   |   ssltransport.py
|   |       |   |   |   |   |   ssl_.py
|   |       |   |   |   |   |   ssl_match_hostname.py
|   |       |   |   |   |   |   timeout.py
|   |       |   |   |   |   |   url.py
|   |       |   |   |   |   |   wait.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           connection.cpython-312.pyc
|   |       |   |   |   |           proxy.cpython-312.pyc
|   |       |   |   |   |           queue.cpython-312.pyc
|   |       |   |   |   |           request.cpython-312.pyc
|   |       |   |   |   |           response.cpython-312.pyc
|   |       |   |   |   |           retry.cpython-312.pyc
|   |       |   |   |   |           ssltransport.cpython-312.pyc
|   |       |   |   |   |           ssl_.cpython-312.pyc
|   |       |   |   |   |           ssl_match_hostname.cpython-312.pyc
|   |       |   |   |   |           timeout.cpython-312.pyc
|   |       |   |   |   |           url.cpython-312.pyc
|   |       |   |   |   |           wait.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           connection.cpython-312.pyc
|   |       |   |   |           connectionpool.cpython-312.pyc
|   |       |   |   |           exceptions.cpython-312.pyc
|   |       |   |   |           fields.cpython-312.pyc
|   |       |   |   |           filepost.cpython-312.pyc
|   |       |   |   |           poolmanager.cpython-312.pyc
|   |       |   |   |           request.cpython-312.pyc
|   |       |   |   |           response.cpython-312.pyc
|   |       |   |   |           _collections.cpython-312.pyc
|   |       |   |   |           _version.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   \---__pycache__
|   |       |   |           typing_extensions.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           __init__.cpython-312.pyc
|   |       |           __main__.cpython-312.pyc
|   |       |           __pip-runner__.cpython-312.pyc
|   |       |           
|   |       +---pip-24.2.dist-info
|   |       |       AUTHORS.txt
|   |       |       entry_points.txt
|   |       |       INSTALLER
|   |       |       LICENSE.txt
|   |       |       METADATA
|   |       |       RECORD
|   |       |       REQUESTED
|   |       |       top_level.txt
|   |       |       WHEEL
|   |       |       
|   |       +---sqlalchemy
|   |       |   |   events.py
|   |       |   |   exc.py
|   |       |   |   inspection.py
|   |       |   |   log.py
|   |       |   |   py.typed
|   |       |   |   schema.py
|   |       |   |   types.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   +---connectors
|   |       |   |   |   aioodbc.py
|   |       |   |   |   asyncio.py
|   |       |   |   |   pyodbc.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           aioodbc.cpython-312.pyc
|   |       |   |           asyncio.cpython-312.pyc
|   |       |   |           pyodbc.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---cyextension
|   |       |   |   |   collections.cp312-win_amd64.pyd
|   |       |   |   |   collections.pyx
|   |       |   |   |   immutabledict.cp312-win_amd64.pyd
|   |       |   |   |   immutabledict.pxd
|   |       |   |   |   immutabledict.pyx
|   |       |   |   |   processors.cp312-win_amd64.pyd
|   |       |   |   |   processors.pyx
|   |       |   |   |   resultproxy.cp312-win_amd64.pyd
|   |       |   |   |   resultproxy.pyx
|   |       |   |   |   util.cp312-win_amd64.pyd
|   |       |   |   |   util.pyx
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---dialects
|   |       |   |   |   type_migration_guidelines.txt
|   |       |   |   |   _typing.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---mssql
|   |       |   |   |   |   aioodbc.py
|   |       |   |   |   |   base.py
|   |       |   |   |   |   information_schema.py
|   |       |   |   |   |   json.py
|   |       |   |   |   |   provision.py
|   |       |   |   |   |   pymssql.py
|   |       |   |   |   |   pyodbc.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           aioodbc.cpython-312.pyc
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           information_schema.cpython-312.pyc
|   |       |   |   |           json.cpython-312.pyc
|   |       |   |   |           provision.cpython-312.pyc
|   |       |   |   |           pymssql.cpython-312.pyc
|   |       |   |   |           pyodbc.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---mysql
|   |       |   |   |   |   aiomysql.py
|   |       |   |   |   |   asyncmy.py
|   |       |   |   |   |   base.py
|   |       |   |   |   |   cymysql.py
|   |       |   |   |   |   dml.py
|   |       |   |   |   |   enumerated.py
|   |       |   |   |   |   expression.py
|   |       |   |   |   |   json.py
|   |       |   |   |   |   mariadb.py
|   |       |   |   |   |   mariadbconnector.py
|   |       |   |   |   |   mysqlconnector.py
|   |       |   |   |   |   mysqldb.py
|   |       |   |   |   |   provision.py
|   |       |   |   |   |   pymysql.py
|   |       |   |   |   |   pyodbc.py
|   |       |   |   |   |   reflection.py
|   |       |   |   |   |   reserved_words.py
|   |       |   |   |   |   types.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           aiomysql.cpython-312.pyc
|   |       |   |   |           asyncmy.cpython-312.pyc
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           cymysql.cpython-312.pyc
|   |       |   |   |           dml.cpython-312.pyc
|   |       |   |   |           enumerated.cpython-312.pyc
|   |       |   |   |           expression.cpython-312.pyc
|   |       |   |   |           json.cpython-312.pyc
|   |       |   |   |           mariadb.cpython-312.pyc
|   |       |   |   |           mariadbconnector.cpython-312.pyc
|   |       |   |   |           mysqlconnector.cpython-312.pyc
|   |       |   |   |           mysqldb.cpython-312.pyc
|   |       |   |   |           provision.cpython-312.pyc
|   |       |   |   |           pymysql.cpython-312.pyc
|   |       |   |   |           pyodbc.cpython-312.pyc
|   |       |   |   |           reflection.cpython-312.pyc
|   |       |   |   |           reserved_words.cpython-312.pyc
|   |       |   |   |           types.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---oracle
|   |       |   |   |   |   base.py
|   |       |   |   |   |   cx_oracle.py
|   |       |   |   |   |   dictionary.py
|   |       |   |   |   |   oracledb.py
|   |       |   |   |   |   provision.py
|   |       |   |   |   |   types.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           cx_oracle.cpython-312.pyc
|   |       |   |   |           dictionary.cpython-312.pyc
|   |       |   |   |           oracledb.cpython-312.pyc
|   |       |   |   |           provision.cpython-312.pyc
|   |       |   |   |           types.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---postgresql
|   |       |   |   |   |   array.py
|   |       |   |   |   |   asyncpg.py
|   |       |   |   |   |   base.py
|   |       |   |   |   |   dml.py
|   |       |   |   |   |   ext.py
|   |       |   |   |   |   hstore.py
|   |       |   |   |   |   json.py
|   |       |   |   |   |   named_types.py
|   |       |   |   |   |   operators.py
|   |       |   |   |   |   pg8000.py
|   |       |   |   |   |   pg_catalog.py
|   |       |   |   |   |   provision.py
|   |       |   |   |   |   psycopg.py
|   |       |   |   |   |   psycopg2.py
|   |       |   |   |   |   psycopg2cffi.py
|   |       |   |   |   |   ranges.py
|   |       |   |   |   |   types.py
|   |       |   |   |   |   _psycopg_common.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           array.cpython-312.pyc
|   |       |   |   |           asyncpg.cpython-312.pyc
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           dml.cpython-312.pyc
|   |       |   |   |           ext.cpython-312.pyc
|   |       |   |   |           hstore.cpython-312.pyc
|   |       |   |   |           json.cpython-312.pyc
|   |       |   |   |           named_types.cpython-312.pyc
|   |       |   |   |           operators.cpython-312.pyc
|   |       |   |   |           pg8000.cpython-312.pyc
|   |       |   |   |           pg_catalog.cpython-312.pyc
|   |       |   |   |           provision.cpython-312.pyc
|   |       |   |   |           psycopg.cpython-312.pyc
|   |       |   |   |           psycopg2.cpython-312.pyc
|   |       |   |   |           psycopg2cffi.cpython-312.pyc
|   |       |   |   |           ranges.cpython-312.pyc
|   |       |   |   |           types.cpython-312.pyc
|   |       |   |   |           _psycopg_common.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---sqlite
|   |       |   |   |   |   aiosqlite.py
|   |       |   |   |   |   base.py
|   |       |   |   |   |   dml.py
|   |       |   |   |   |   json.py
|   |       |   |   |   |   provision.py
|   |       |   |   |   |   pysqlcipher.py
|   |       |   |   |   |   pysqlite.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           aiosqlite.cpython-312.pyc
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           dml.cpython-312.pyc
|   |       |   |   |           json.cpython-312.pyc
|   |       |   |   |           provision.cpython-312.pyc
|   |       |   |   |           pysqlcipher.cpython-312.pyc
|   |       |   |   |           pysqlite.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   \---__pycache__
|   |       |   |           _typing.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---engine
|   |       |   |   |   base.py
|   |       |   |   |   characteristics.py
|   |       |   |   |   create.py
|   |       |   |   |   cursor.py
|   |       |   |   |   default.py
|   |       |   |   |   events.py
|   |       |   |   |   interfaces.py
|   |       |   |   |   mock.py
|   |       |   |   |   processors.py
|   |       |   |   |   reflection.py
|   |       |   |   |   result.py
|   |       |   |   |   row.py
|   |       |   |   |   strategies.py
|   |       |   |   |   url.py
|   |       |   |   |   util.py
|   |       |   |   |   _py_processors.py
|   |       |   |   |   _py_row.py
|   |       |   |   |   _py_util.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           base.cpython-312.pyc
|   |       |   |           characteristics.cpython-312.pyc
|   |       |   |           create.cpython-312.pyc
|   |       |   |           cursor.cpython-312.pyc
|   |       |   |           default.cpython-312.pyc
|   |       |   |           events.cpython-312.pyc
|   |       |   |           interfaces.cpython-312.pyc
|   |       |   |           mock.cpython-312.pyc
|   |       |   |           processors.cpython-312.pyc
|   |       |   |           reflection.cpython-312.pyc
|   |       |   |           result.cpython-312.pyc
|   |       |   |           row.cpython-312.pyc
|   |       |   |           strategies.cpython-312.pyc
|   |       |   |           url.cpython-312.pyc
|   |       |   |           util.cpython-312.pyc
|   |       |   |           _py_processors.cpython-312.pyc
|   |       |   |           _py_row.cpython-312.pyc
|   |       |   |           _py_util.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---event
|   |       |   |   |   api.py
|   |       |   |   |   attr.py
|   |       |   |   |   base.py
|   |       |   |   |   legacy.py
|   |       |   |   |   registry.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           api.cpython-312.pyc
|   |       |   |           attr.cpython-312.pyc
|   |       |   |           base.cpython-312.pyc
|   |       |   |           legacy.cpython-312.pyc
|   |       |   |           registry.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---ext
|   |       |   |   |   associationproxy.py
|   |       |   |   |   automap.py
|   |       |   |   |   baked.py
|   |       |   |   |   compiler.py
|   |       |   |   |   horizontal_shard.py
|   |       |   |   |   hybrid.py
|   |       |   |   |   indexable.py
|   |       |   |   |   instrumentation.py
|   |       |   |   |   mutable.py
|   |       |   |   |   orderinglist.py
|   |       |   |   |   serializer.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---asyncio
|   |       |   |   |   |   base.py
|   |       |   |   |   |   engine.py
|   |       |   |   |   |   exc.py
|   |       |   |   |   |   result.py
|   |       |   |   |   |   scoping.py
|   |       |   |   |   |   session.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           engine.cpython-312.pyc
|   |       |   |   |           exc.cpython-312.pyc
|   |       |   |   |           result.cpython-312.pyc
|   |       |   |   |           scoping.cpython-312.pyc
|   |       |   |   |           session.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---declarative
|   |       |   |   |   |   extensions.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           extensions.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---mypy
|   |       |   |   |   |   apply.py
|   |       |   |   |   |   decl_class.py
|   |       |   |   |   |   infer.py
|   |       |   |   |   |   names.py
|   |       |   |   |   |   plugin.py
|   |       |   |   |   |   util.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           apply.cpython-312.pyc
|   |       |   |   |           decl_class.cpython-312.pyc
|   |       |   |   |           infer.cpython-312.pyc
|   |       |   |   |           names.cpython-312.pyc
|   |       |   |   |           plugin.cpython-312.pyc
|   |       |   |   |           util.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   \---__pycache__
|   |       |   |           associationproxy.cpython-312.pyc
|   |       |   |           automap.cpython-312.pyc
|   |       |   |           baked.cpython-312.pyc
|   |       |   |           compiler.cpython-312.pyc
|   |       |   |           horizontal_shard.cpython-312.pyc
|   |       |   |           hybrid.cpython-312.pyc
|   |       |   |           indexable.cpython-312.pyc
|   |       |   |           instrumentation.cpython-312.pyc
|   |       |   |           mutable.cpython-312.pyc
|   |       |   |           orderinglist.cpython-312.pyc
|   |       |   |           serializer.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---future
|   |       |   |   |   engine.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           engine.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---orm
|   |       |   |   |   attributes.py
|   |       |   |   |   base.py
|   |       |   |   |   bulk_persistence.py
|   |       |   |   |   clsregistry.py
|   |       |   |   |   collections.py
|   |       |   |   |   context.py
|   |       |   |   |   decl_api.py
|   |       |   |   |   decl_base.py
|   |       |   |   |   dependency.py
|   |       |   |   |   descriptor_props.py
|   |       |   |   |   dynamic.py
|   |       |   |   |   evaluator.py
|   |       |   |   |   events.py
|   |       |   |   |   exc.py
|   |       |   |   |   identity.py
|   |       |   |   |   instrumentation.py
|   |       |   |   |   interfaces.py
|   |       |   |   |   loading.py
|   |       |   |   |   mapped_collection.py
|   |       |   |   |   mapper.py
|   |       |   |   |   path_registry.py
|   |       |   |   |   persistence.py
|   |       |   |   |   properties.py
|   |       |   |   |   query.py
|   |       |   |   |   relationships.py
|   |       |   |   |   scoping.py
|   |       |   |   |   session.py
|   |       |   |   |   state.py
|   |       |   |   |   state_changes.py
|   |       |   |   |   strategies.py
|   |       |   |   |   strategy_options.py
|   |       |   |   |   sync.py
|   |       |   |   |   unitofwork.py
|   |       |   |   |   util.py
|   |       |   |   |   writeonly.py
|   |       |   |   |   _orm_constructors.py
|   |       |   |   |   _typing.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           attributes.cpython-312.pyc
|   |       |   |           base.cpython-312.pyc
|   |       |   |           bulk_persistence.cpython-312.pyc
|   |       |   |           clsregistry.cpython-312.pyc
|   |       |   |           collections.cpython-312.pyc
|   |       |   |           context.cpython-312.pyc
|   |       |   |           decl_api.cpython-312.pyc
|   |       |   |           decl_base.cpython-312.pyc
|   |       |   |           dependency.cpython-312.pyc
|   |       |   |           descriptor_props.cpython-312.pyc
|   |       |   |           dynamic.cpython-312.pyc
|   |       |   |           evaluator.cpython-312.pyc
|   |       |   |           events.cpython-312.pyc
|   |       |   |           exc.cpython-312.pyc
|   |       |   |           identity.cpython-312.pyc
|   |       |   |           instrumentation.cpython-312.pyc
|   |       |   |           interfaces.cpython-312.pyc
|   |       |   |           loading.cpython-312.pyc
|   |       |   |           mapped_collection.cpython-312.pyc
|   |       |   |           mapper.cpython-312.pyc
|   |       |   |           path_registry.cpython-312.pyc
|   |       |   |           persistence.cpython-312.pyc
|   |       |   |           properties.cpython-312.pyc
|   |       |   |           query.cpython-312.pyc
|   |       |   |           relationships.cpython-312.pyc
|   |       |   |           scoping.cpython-312.pyc
|   |       |   |           session.cpython-312.pyc
|   |       |   |           state.cpython-312.pyc
|   |       |   |           state_changes.cpython-312.pyc
|   |       |   |           strategies.cpython-312.pyc
|   |       |   |           strategy_options.cpython-312.pyc
|   |       |   |           sync.cpython-312.pyc
|   |       |   |           unitofwork.cpython-312.pyc
|   |       |   |           util.cpython-312.pyc
|   |       |   |           writeonly.cpython-312.pyc
|   |       |   |           _orm_constructors.cpython-312.pyc
|   |       |   |           _typing.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---pool
|   |       |   |   |   base.py
|   |       |   |   |   events.py
|   |       |   |   |   impl.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           base.cpython-312.pyc
|   |       |   |           events.cpython-312.pyc
|   |       |   |           impl.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---sql
|   |       |   |   |   annotation.py
|   |       |   |   |   base.py
|   |       |   |   |   cache_key.py
|   |       |   |   |   coercions.py
|   |       |   |   |   compiler.py
|   |       |   |   |   crud.py
|   |       |   |   |   ddl.py
|   |       |   |   |   default_comparator.py
|   |       |   |   |   dml.py
|   |       |   |   |   elements.py
|   |       |   |   |   events.py
|   |       |   |   |   expression.py
|   |       |   |   |   functions.py
|   |       |   |   |   lambdas.py
|   |       |   |   |   naming.py
|   |       |   |   |   operators.py
|   |       |   |   |   roles.py
|   |       |   |   |   schema.py
|   |       |   |   |   selectable.py
|   |       |   |   |   sqltypes.py
|   |       |   |   |   traversals.py
|   |       |   |   |   type_api.py
|   |       |   |   |   util.py
|   |       |   |   |   visitors.py
|   |       |   |   |   _dml_constructors.py
|   |       |   |   |   _elements_constructors.py
|   |       |   |   |   _orm_types.py
|   |       |   |   |   _py_util.py
|   |       |   |   |   _selectable_constructors.py
|   |       |   |   |   _typing.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           annotation.cpython-312.pyc
|   |       |   |           base.cpython-312.pyc
|   |       |   |           cache_key.cpython-312.pyc
|   |       |   |           coercions.cpython-312.pyc
|   |       |   |           compiler.cpython-312.pyc
|   |       |   |           crud.cpython-312.pyc
|   |       |   |           ddl.cpython-312.pyc
|   |       |   |           default_comparator.cpython-312.pyc
|   |       |   |           dml.cpython-312.pyc
|   |       |   |           elements.cpython-312.pyc
|   |       |   |           events.cpython-312.pyc
|   |       |   |           expression.cpython-312.pyc
|   |       |   |           functions.cpython-312.pyc
|   |       |   |           lambdas.cpython-312.pyc
|   |       |   |           naming.cpython-312.pyc
|   |       |   |           operators.cpython-312.pyc
|   |       |   |           roles.cpython-312.pyc
|   |       |   |           schema.cpython-312.pyc
|   |       |   |           selectable.cpython-312.pyc
|   |       |   |           sqltypes.cpython-312.pyc
|   |       |   |           traversals.cpython-312.pyc
|   |       |   |           type_api.cpython-312.pyc
|   |       |   |           util.cpython-312.pyc
|   |       |   |           visitors.cpython-312.pyc
|   |       |   |           _dml_constructors.cpython-312.pyc
|   |       |   |           _elements_constructors.cpython-312.pyc
|   |       |   |           _orm_types.cpython-312.pyc
|   |       |   |           _py_util.cpython-312.pyc
|   |       |   |           _selectable_constructors.cpython-312.pyc
|   |       |   |           _typing.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---testing
|   |       |   |   |   assertions.py
|   |       |   |   |   assertsql.py
|   |       |   |   |   asyncio.py
|   |       |   |   |   config.py
|   |       |   |   |   engines.py
|   |       |   |   |   entities.py
|   |       |   |   |   exclusions.py
|   |       |   |   |   pickleable.py
|   |       |   |   |   profiling.py
|   |       |   |   |   provision.py
|   |       |   |   |   requirements.py
|   |       |   |   |   schema.py
|   |       |   |   |   util.py
|   |       |   |   |   warnings.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---fixtures
|   |       |   |   |   |   base.py
|   |       |   |   |   |   mypy.py
|   |       |   |   |   |   orm.py
|   |       |   |   |   |   sql.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           mypy.cpython-312.pyc
|   |       |   |   |           orm.cpython-312.pyc
|   |       |   |   |           sql.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---plugin
|   |       |   |   |   |   bootstrap.py
|   |       |   |   |   |   plugin_base.py
|   |       |   |   |   |   pytestplugin.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           bootstrap.cpython-312.pyc
|   |       |   |   |           plugin_base.cpython-312.pyc
|   |       |   |   |           pytestplugin.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---suite
|   |       |   |   |   |   test_cte.py
|   |       |   |   |   |   test_ddl.py
|   |       |   |   |   |   test_deprecations.py
|   |       |   |   |   |   test_dialect.py
|   |       |   |   |   |   test_insert.py
|   |       |   |   |   |   test_reflection.py
|   |       |   |   |   |   test_results.py
|   |       |   |   |   |   test_rowcount.py
|   |       |   |   |   |   test_select.py
|   |       |   |   |   |   test_sequence.py
|   |       |   |   |   |   test_types.py
|   |       |   |   |   |   test_unicode_ddl.py
|   |       |   |   |   |   test_update_delete.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           test_cte.cpython-312.pyc
|   |       |   |   |           test_ddl.cpython-312.pyc
|   |       |   |   |           test_deprecations.cpython-312.pyc
|   |       |   |   |           test_dialect.cpython-312.pyc
|   |       |   |   |           test_insert.cpython-312.pyc
|   |       |   |   |           test_reflection.cpython-312.pyc
|   |       |   |   |           test_results.cpython-312.pyc
|   |       |   |   |           test_rowcount.cpython-312.pyc
|   |       |   |   |           test_select.cpython-312.pyc
|   |       |   |   |           test_sequence.cpython-312.pyc
|   |       |   |   |           test_types.cpython-312.pyc
|   |       |   |   |           test_unicode_ddl.cpython-312.pyc
|   |       |   |   |           test_update_delete.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   \---__pycache__
|   |       |   |           assertions.cpython-312.pyc
|   |       |   |           assertsql.cpython-312.pyc
|   |       |   |           asyncio.cpython-312.pyc
|   |       |   |           config.cpython-312.pyc
|   |       |   |           engines.cpython-312.pyc
|   |       |   |           entities.cpython-312.pyc
|   |       |   |           exclusions.cpython-312.pyc
|   |       |   |           pickleable.cpython-312.pyc
|   |       |   |           profiling.cpython-312.pyc
|   |       |   |           provision.cpython-312.pyc
|   |       |   |           requirements.cpython-312.pyc
|   |       |   |           schema.cpython-312.pyc
|   |       |   |           util.cpython-312.pyc
|   |       |   |           warnings.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---util
|   |       |   |   |   compat.py
|   |       |   |   |   concurrency.py
|   |       |   |   |   deprecations.py
|   |       |   |   |   langhelpers.py
|   |       |   |   |   preloaded.py
|   |       |   |   |   queue.py
|   |       |   |   |   tool_support.py
|   |       |   |   |   topological.py
|   |       |   |   |   typing.py
|   |       |   |   |   _collections.py
|   |       |   |   |   _concurrency_py3k.py
|   |       |   |   |   _has_cy.py
|   |       |   |   |   _py_collections.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           compat.cpython-312.pyc
|   |       |   |           concurrency.cpython-312.pyc
|   |       |   |           deprecations.cpython-312.pyc
|   |       |   |           langhelpers.cpython-312.pyc
|   |       |   |           preloaded.cpython-312.pyc
|   |       |   |           queue.cpython-312.pyc
|   |       |   |           tool_support.cpython-312.pyc
|   |       |   |           topological.cpython-312.pyc
|   |       |   |           typing.cpython-312.pyc
|   |       |   |           _collections.cpython-312.pyc
|   |       |   |           _concurrency_py3k.cpython-312.pyc
|   |       |   |           _has_cy.cpython-312.pyc
|   |       |   |           _py_collections.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           events.cpython-312.pyc
|   |       |           exc.cpython-312.pyc
|   |       |           inspection.cpython-312.pyc
|   |       |           log.cpython-312.pyc
|   |       |           schema.cpython-312.pyc
|   |       |           types.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---SQLAlchemy-2.0.31.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE
|   |       |       METADATA
|   |       |       RECORD
|   |       |       REQUESTED
|   |       |       top_level.txt
|   |       |       WHEEL
|   |       |       
|   |       +---typing_extensions-4.15.0.dist-info
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE
|   |       |           
|   |       +---werkzeug
|   |       |   |   exceptions.py
|   |       |   |   formparser.py
|   |       |   |   http.py
|   |       |   |   local.py
|   |       |   |   py.typed
|   |       |   |   security.py
|   |       |   |   serving.py
|   |       |   |   test.py
|   |       |   |   testapp.py
|   |       |   |   urls.py
|   |       |   |   user_agent.py
|   |       |   |   utils.py
|   |       |   |   wsgi.py
|   |       |   |   _internal.py
|   |       |   |   _reloader.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   +---datastructures
|   |       |   |   |   accept.py
|   |       |   |   |   auth.py
|   |       |   |   |   cache_control.py
|   |       |   |   |   csp.py
|   |       |   |   |   etag.py
|   |       |   |   |   file_storage.py
|   |       |   |   |   headers.py
|   |       |   |   |   mixins.py
|   |       |   |   |   range.py
|   |       |   |   |   structures.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           accept.cpython-312.pyc
|   |       |   |           auth.cpython-312.pyc
|   |       |   |           cache_control.cpython-312.pyc
|   |       |   |           csp.cpython-312.pyc
|   |       |   |           etag.cpython-312.pyc
|   |       |   |           file_storage.cpython-312.pyc
|   |       |   |           headers.cpython-312.pyc
|   |       |   |           mixins.cpython-312.pyc
|   |       |   |           range.cpython-312.pyc
|   |       |   |           structures.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---debug
|   |       |   |   |   console.py
|   |       |   |   |   repr.py
|   |       |   |   |   tbtools.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---shared
|   |       |   |   |       console.png
|   |       |   |   |       debugger.js
|   |       |   |   |       ICON_LICENSE.md
|   |       |   |   |       less.png
|   |       |   |   |       more.png
|   |       |   |   |       style.css
|   |       |   |   |       
|   |       |   |   \---__pycache__
|   |       |   |           console.cpython-312.pyc
|   |       |   |           repr.cpython-312.pyc
|   |       |   |           tbtools.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---middleware
|   |       |   |   |   dispatcher.py
|   |       |   |   |   http_proxy.py
|   |       |   |   |   lint.py
|   |       |   |   |   profiler.py
|   |       |   |   |   proxy_fix.py
|   |       |   |   |   shared_data.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           dispatcher.cpython-312.pyc
|   |       |   |           http_proxy.cpython-312.pyc
|   |       |   |           lint.cpython-312.pyc
|   |       |   |           profiler.cpython-312.pyc
|   |       |   |           proxy_fix.cpython-312.pyc
|   |       |   |           shared_data.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---routing
|   |       |   |   |   converters.py
|   |       |   |   |   exceptions.py
|   |       |   |   |   map.py
|   |       |   |   |   matcher.py
|   |       |   |   |   rules.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           converters.cpython-312.pyc
|   |       |   |           exceptions.cpython-312.pyc
|   |       |   |           map.cpython-312.pyc
|   |       |   |           matcher.cpython-312.pyc
|   |       |   |           rules.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---sansio
|   |       |   |   |   http.py
|   |       |   |   |   multipart.py
|   |       |   |   |   request.py
|   |       |   |   |   response.py
|   |       |   |   |   utils.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           http.cpython-312.pyc
|   |       |   |           multipart.cpython-312.pyc
|   |       |   |           request.cpython-312.pyc
|   |       |   |           response.cpython-312.pyc
|   |       |   |           utils.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---wrappers
|   |       |   |   |   request.py
|   |       |   |   |   response.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           request.cpython-312.pyc
|   |       |   |           response.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           exceptions.cpython-312.pyc
|   |       |           formparser.cpython-312.pyc
|   |       |           http.cpython-312.pyc
|   |       |           local.cpython-312.pyc
|   |       |           security.cpython-312.pyc
|   |       |           serving.cpython-312.pyc
|   |       |           test.cpython-312.pyc
|   |       |           testapp.cpython-312.pyc
|   |       |           urls.cpython-312.pyc
|   |       |           user_agent.cpython-312.pyc
|   |       |           utils.cpython-312.pyc
|   |       |           wsgi.cpython-312.pyc
|   |       |           _internal.cpython-312.pyc
|   |       |           _reloader.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---werkzeug-3.1.3.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE.txt
|   |       |       METADATA
|   |       |       RECORD
|   |       |       WHEEL
|   |       |       
|   |       \---__pycache__
|   |               typing_extensions.cpython-312.pyc
|   |               
|   \---Scripts
|           activate
|           activate.bat
|           Activate.ps1
|           deactivate.bat
|           flask.exe
|           pip.exe
|           pip3.12.exe
|           pip3.exe
|           python.exe
|           pythonw.exe
|           
+---.vs
|   |   slnx.sqlite
|   |   VSWorkspaceState.json
|   |   
|   \---roman-writing-mvp
|       +---FileContentIndex
|       |       0e566617-4120-439a-8f0f-c0a20a3dcf68.vsidx
|       |       13db1929-9897-4370-9d82-8cf2e42929a1.vsidx
|       |       3331c02e-9621-4086-a1c8-54e8b7d636ea.vsidx
|       |       584ad077-97c2-499a-8f75-1f31fbdfa1f1.vsidx
|       |       a7e1cc4a-08aa-497b-8ee5-6ca1d0da3972.vsidx
|       |       
|       \---v17
|               DocumentLayout.backup.json
|               DocumentLayout.json
|               workspaceFileList.bin
|               
+---backend
|   |   app.db
|   |   app.py
|   |   README.md
|   |   requirements.txt
|   |   
|   \---.venv
|       |   pyvenv.cfg
|       |   
|       +---Include
|       |   \---site
|       |       \---python3.12
|       |           \---greenlet
|       |                   greenlet.h
|       |                   
|       +---Lib
|       |   \---site-packages
|       |       |   typing_extensions.py
|       |       |   
|       |       +---blinker
|       |       |   |   base.py
|       |       |   |   py.typed
|       |       |   |   _utilities.py
|       |       |   |   __init__.py
|       |       |   |   
|       |       |   \---__pycache__
|       |       |           base.cpython-312.pyc
|       |       |           _utilities.cpython-312.pyc
|       |       |           __init__.cpython-312.pyc
|       |       |           
|       |       +---blinker-1.9.0.dist-info
|       |       |       INSTALLER
|       |       |       LICENSE.txt
|       |       |       METADATA
|       |       |       RECORD
|       |       |       WHEEL
|       |       |       
|       |       +---click
|       |       |   |   core.py
|       |       |   |   decorators.py
|       |       |   |   exceptions.py
|       |       |   |   formatting.py
|       |       |   |   globals.py
|       |       |   |   parser.py
|       |       |   |   py.typed
|       |       |   |   shell_completion.py
|       |       |   |   termui.py
|       |       |   |   testing.py
|       |       |   |   types.py
|       |       |   |   utils.py
|       |       |   |   _compat.py
|       |       |   |   _termui_impl.py
|       |       |   |   _textwrap.py
|       |       |   |   _utils.py
|       |       |   |   _winconsole.py
|       |       |   |   __init__.py
|       |       |   |   
|       |       |   \---__pycache__
|       |       |           core.cpython-312.pyc
|       |       |           decorators.cpython-312.pyc
|       |       |           exceptions.cpython-312.pyc
|       |       |           formatting.cpython-312.pyc
|       |       |           globals.cpython-312.pyc
|       |       |           parser.cpython-312.pyc
|       |       |           shell_completion.cpython-312.pyc
|       |       |           termui.cpython-312.pyc
|       |       |           testing.cpython-312.pyc
|       |       |           types.cpython-312.pyc
|       |       |           utils.cpython-312.pyc
|       |       |           _compat.cpython-312.pyc
|       |       |           _termui_impl.cpython-312.pyc
|       |       |           _textwrap.cpython-312.pyc
|       |       |           _utils.cpython-312.pyc
|       |       |           _winconsole.cpython-312.pyc
|       |       |           __init__.cpython-312.pyc
|       |       |           
|       |       +---click-8.3.0.dist-info
|       |       |   |   INSTALLER
|       |       |   |   METADATA
|       |       |   |   RECORD
|       |       |   |   WHEEL
|       |       |   |   
|       |       |   \---licenses
|       |       |           LICENSE.txt
|       |       |           
|       |       +---colorama
|       |       |   |   ansi.py
|       |       |   |   ansitowin32.py
|       |       |   |   initialise.py
|       |       |   |   win32.py
|       |       |   |   winterm.py
|       |       |   |   __init__.py
|       |       |   |   
|       |       |   +---tests
|       |       |   |   |   ansitowin32_test.py
|       |       |   |   |   ansi_test.py
|       |       |   |   |   initialise_test.py
|       |       |   |   |   isatty_test.py
|       |       |   |   |   utils.py
|       |       |   |   |   winterm_test.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           ansitowin32_test.cpython-312.pyc
|       |       |   |           ansi_test.cpython-312.pyc
|       |       |   |           initialise_test.cpython-312.pyc
|       |       |   |           isatty_test.cpython-312.pyc
|       |       |   |           utils.cpython-312.pyc
|       |       |   |           winterm_test.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   \---__pycache__
|       |       |           ansi.cpython-312.pyc
|       |       |           ansitowin32.cpython-312.pyc
|       |       |           initialise.cpython-312.pyc
|       |       |           win32.cpython-312.pyc
|       |       |           winterm.cpython-312.pyc
|       |       |           __init__.cpython-312.pyc
|       |       |           
|       |       +---colorama-0.4.6.dist-info
|       |       |   |   INSTALLER
|       |       |   |   METADATA
|       |       |   |   RECORD
|       |       |   |   WHEEL
|       |       |   |   
|       |       |   \---licenses
|       |       |           LICENSE.txt
|       |       |           
|       |       +---flask
|       |       |   |   app.py
|       |       |   |   blueprints.py
|       |       |   |   cli.py
|       |       |   |   config.py
|       |       |   |   ctx.py
|       |       |   |   debughelpers.py
|       |       |   |   globals.py
|       |       |   |   helpers.py
|       |       |   |   logging.py
|       |       |   |   py.typed
|       |       |   |   sessions.py
|       |       |   |   signals.py
|       |       |   |   templating.py
|       |       |   |   testing.py
|       |       |   |   typing.py
|       |       |   |   views.py
|       |       |   |   wrappers.py
|       |       |   |   __init__.py
|       |       |   |   __main__.py
|       |       |   |   
|       |       |   +---json
|       |       |   |   |   provider.py
|       |       |   |   |   tag.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           provider.cpython-312.pyc
|       |       |   |           tag.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---sansio
|       |       |   |   |   app.py
|       |       |   |   |   blueprints.py
|       |       |   |   |   README.md
|       |       |   |   |   scaffold.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           app.cpython-312.pyc
|       |       |   |           blueprints.cpython-312.pyc
|       |       |   |           scaffold.cpython-312.pyc
|       |       |   |           
|       |       |   \---__pycache__
|       |       |           app.cpython-312.pyc
|       |       |           blueprints.cpython-312.pyc
|       |       |           cli.cpython-312.pyc
|       |       |           config.cpython-312.pyc
|       |       |           ctx.cpython-312.pyc
|       |       |           debughelpers.cpython-312.pyc
|       |       |           globals.cpython-312.pyc
|       |       |           helpers.cpython-312.pyc
|       |       |           logging.cpython-312.pyc
|       |       |           sessions.cpython-312.pyc
|       |       |           signals.cpython-312.pyc
|       |       |           templating.cpython-312.pyc
|       |       |           testing.cpython-312.pyc
|       |       |           typing.cpython-312.pyc
|       |       |           views.cpython-312.pyc
|       |       |           wrappers.cpython-312.pyc
|       |       |           __init__.cpython-312.pyc
|       |       |           __main__.cpython-312.pyc
|       |       |           
|       |       +---flask-3.0.3.dist-info
|       |       |       entry_points.txt
|       |       |       INSTALLER
|       |       |       LICENSE.txt
|       |       |       METADATA
|       |       |       RECORD
|       |       |       REQUESTED
|       |       |       WHEEL
|       |       |       
|       |       +---flask_cors
|       |       |   |   core.py
|       |       |   |   decorator.py
|       |       |   |   extension.py
|       |       |   |   version.py
|       |       |   |   __init__.py
|       |       |   |   
|       |       |   \---__pycache__
|       |       |           core.cpython-312.pyc
|       |       |           decorator.cpython-312.pyc
|       |       |           extension.cpython-312.pyc
|       |       |           version.cpython-312.pyc
|       |       |           __init__.cpython-312.pyc
|       |       |           
|       |       +---Flask_Cors-4.0.1.dist-info
|       |       |       INSTALLER
|       |       |       LICENSE
|       |       |       METADATA
|       |       |       RECORD
|       |       |       REQUESTED
|       |       |       top_level.txt
|       |       |       WHEEL
|       |       |       
|       |       +---flask_sqlalchemy
|       |       |   |   cli.py
|       |       |   |   extension.py
|       |       |   |   model.py
|       |       |   |   pagination.py
|       |       |   |   py.typed
|       |       |   |   query.py
|       |       |   |   record_queries.py
|       |       |   |   session.py
|       |       |   |   table.py
|       |       |   |   track_modifications.py
|       |       |   |   __init__.py
|       |       |   |   
|       |       |   \---__pycache__
|       |       |           cli.cpython-312.pyc
|       |       |           extension.cpython-312.pyc
|       |       |           model.cpython-312.pyc
|       |       |           pagination.cpython-312.pyc
|       |       |           query.cpython-312.pyc
|       |       |           record_queries.cpython-312.pyc
|       |       |           session.cpython-312.pyc
|       |       |           table.cpython-312.pyc
|       |       |           track_modifications.cpython-312.pyc
|       |       |           __init__.cpython-312.pyc
|       |       |           
|       |       +---flask_sqlalchemy-3.1.1.dist-info
|       |       |       INSTALLER
|       |       |       LICENSE.rst
|       |       |       METADATA
|       |       |       RECORD
|       |       |       REQUESTED
|       |       |       WHEEL
|       |       |       
|       |       +---greenlet
|       |       |   |   CObjects.cpp
|       |       |   |   greenlet.cpp
|       |       |   |   greenlet.h
|       |       |   |   greenlet_allocator.hpp
|       |       |   |   greenlet_compiler_compat.hpp
|       |       |   |   greenlet_cpython_compat.hpp
|       |       |   |   greenlet_exceptions.hpp
|       |       |   |   greenlet_internal.hpp
|       |       |   |   greenlet_msvc_compat.hpp
|       |       |   |   greenlet_refs.hpp
|       |       |   |   greenlet_slp_switch.hpp
|       |       |   |   greenlet_thread_support.hpp
|       |       |   |   PyGreenlet.cpp
|       |       |   |   PyGreenlet.hpp
|       |       |   |   PyGreenletUnswitchable.cpp
|       |       |   |   PyModule.cpp
|       |       |   |   slp_platformselect.h
|       |       |   |   TBrokenGreenlet.cpp
|       |       |   |   TExceptionState.cpp
|       |       |   |   TGreenlet.cpp
|       |       |   |   TGreenlet.hpp
|       |       |   |   TGreenletGlobals.cpp
|       |       |   |   TMainGreenlet.cpp
|       |       |   |   TPythonState.cpp
|       |       |   |   TStackState.cpp
|       |       |   |   TThreadState.hpp
|       |       |   |   TThreadStateCreator.hpp
|       |       |   |   TThreadStateDestroy.cpp
|       |       |   |   TUserGreenlet.cpp
|       |       |   |   _greenlet.cp312-win_amd64.pyd
|       |       |   |   __init__.py
|       |       |   |   
|       |       |   +---platform
|       |       |   |   |   setup_switch_x64_masm.cmd
|       |       |   |   |   switch_aarch64_gcc.h
|       |       |   |   |   switch_alpha_unix.h
|       |       |   |   |   switch_amd64_unix.h
|       |       |   |   |   switch_arm32_gcc.h
|       |       |   |   |   switch_arm32_ios.h
|       |       |   |   |   switch_arm64_masm.asm
|       |       |   |   |   switch_arm64_masm.obj
|       |       |   |   |   switch_arm64_msvc.h
|       |       |   |   |   switch_csky_gcc.h
|       |       |   |   |   switch_loongarch64_linux.h
|       |       |   |   |   switch_m68k_gcc.h
|       |       |   |   |   switch_mips_unix.h
|       |       |   |   |   switch_ppc64_aix.h
|       |       |   |   |   switch_ppc64_linux.h
|       |       |   |   |   switch_ppc_aix.h
|       |       |   |   |   switch_ppc_linux.h
|       |       |   |   |   switch_ppc_macosx.h
|       |       |   |   |   switch_ppc_unix.h
|       |       |   |   |   switch_riscv_unix.h
|       |       |   |   |   switch_s390_unix.h
|       |       |   |   |   switch_sh_gcc.h
|       |       |   |   |   switch_sparc_sun_gcc.h
|       |       |   |   |   switch_x32_unix.h
|       |       |   |   |   switch_x64_masm.asm
|       |       |   |   |   switch_x64_masm.obj
|       |       |   |   |   switch_x64_msvc.h
|       |       |   |   |   switch_x86_msvc.h
|       |       |   |   |   switch_x86_unix.h
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---tests
|       |       |   |   |   fail_clearing_run_switches.py
|       |       |   |   |   fail_cpp_exception.py
|       |       |   |   |   fail_initialstub_already_started.py
|       |       |   |   |   fail_slp_switch.py
|       |       |   |   |   fail_switch_three_greenlets.py
|       |       |   |   |   fail_switch_three_greenlets2.py
|       |       |   |   |   fail_switch_two_greenlets.py
|       |       |   |   |   leakcheck.py
|       |       |   |   |   test_contextvars.py
|       |       |   |   |   test_cpp.py
|       |       |   |   |   test_extension_interface.py
|       |       |   |   |   test_gc.py
|       |       |   |   |   test_generator.py
|       |       |   |   |   test_generator_nested.py
|       |       |   |   |   test_greenlet.py
|       |       |   |   |   test_greenlet_trash.py
|       |       |   |   |   test_leaks.py
|       |       |   |   |   test_stack_saved.py
|       |       |   |   |   test_throw.py
|       |       |   |   |   test_tracing.py
|       |       |   |   |   test_version.py
|       |       |   |   |   test_weakref.py
|       |       |   |   |   _test_extension.c
|       |       |   |   |   _test_extension.cp312-win_amd64.pyd
|       |       |   |   |   _test_extension_cpp.cp312-win_amd64.pyd
|       |       |   |   |   _test_extension_cpp.cpp
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           fail_clearing_run_switches.cpython-312.pyc
|       |       |   |           fail_cpp_exception.cpython-312.pyc
|       |       |   |           fail_initialstub_already_started.cpython-312.pyc
|       |       |   |           fail_slp_switch.cpython-312.pyc
|       |       |   |           fail_switch_three_greenlets.cpython-312.pyc
|       |       |   |           fail_switch_three_greenlets2.cpython-312.pyc
|       |       |   |           fail_switch_two_greenlets.cpython-312.pyc
|       |       |   |           leakcheck.cpython-312.pyc
|       |       |   |           test_contextvars.cpython-312.pyc
|       |       |   |           test_cpp.cpython-312.pyc
|       |       |   |           test_extension_interface.cpython-312.pyc
|       |       |   |           test_gc.cpython-312.pyc
|       |       |   |           test_generator.cpython-312.pyc
|       |       |   |           test_generator_nested.cpython-312.pyc
|       |       |   |           test_greenlet.cpython-312.pyc
|       |       |   |           test_greenlet_trash.cpython-312.pyc
|       |       |   |           test_leaks.cpython-312.pyc
|       |       |   |           test_stack_saved.cpython-312.pyc
|       |       |   |           test_throw.cpython-312.pyc
|       |       |   |           test_tracing.cpython-312.pyc
|       |       |   |           test_version.cpython-312.pyc
|       |       |   |           test_weakref.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   \---__pycache__
|       |       |           __init__.cpython-312.pyc
|       |       |           
|       |       +---greenlet-3.2.4.dist-info
|       |       |   |   INSTALLER
|       |       |   |   METADATA
|       |       |   |   RECORD
|       |       |   |   top_level.txt
|       |       |   |   WHEEL
|       |       |   |   
|       |       |   \---licenses
|       |       |           LICENSE
|       |       |           LICENSE.PSF
|       |       |           
|       |       +---itsdangerous
|       |       |   |   encoding.py
|       |       |   |   exc.py
|       |       |   |   py.typed
|       |       |   |   serializer.py
|       |       |   |   signer.py
|       |       |   |   timed.py
|       |       |   |   url_safe.py
|       |       |   |   _json.py
|       |       |   |   __init__.py
|       |       |   |   
|       |       |   \---__pycache__
|       |       |           encoding.cpython-312.pyc
|       |       |           exc.cpython-312.pyc
|       |       |           serializer.cpython-312.pyc
|       |       |           signer.cpython-312.pyc
|       |       |           timed.cpython-312.pyc
|       |       |           url_safe.cpython-312.pyc
|       |       |           _json.cpython-312.pyc
|       |       |           __init__.cpython-312.pyc
|       |       |           
|       |       +---itsdangerous-2.2.0.dist-info
|       |       |       INSTALLER
|       |       |       LICENSE.txt
|       |       |       METADATA
|       |       |       RECORD
|       |       |       WHEEL
|       |       |       
|       |       +---jinja2
|       |       |   |   async_utils.py
|       |       |   |   bccache.py
|       |       |   |   compiler.py
|       |       |   |   constants.py
|       |       |   |   debug.py
|       |       |   |   defaults.py
|       |       |   |   environment.py
|       |       |   |   exceptions.py
|       |       |   |   ext.py
|       |       |   |   filters.py
|       |       |   |   idtracking.py
|       |       |   |   lexer.py
|       |       |   |   loaders.py
|       |       |   |   meta.py
|       |       |   |   nativetypes.py
|       |       |   |   nodes.py
|       |       |   |   optimizer.py
|       |       |   |   parser.py
|       |       |   |   py.typed
|       |       |   |   runtime.py
|       |       |   |   sandbox.py
|       |       |   |   tests.py
|       |       |   |   utils.py
|       |       |   |   visitor.py
|       |       |   |   _identifier.py
|       |       |   |   __init__.py
|       |       |   |   
|       |       |   \---__pycache__
|       |       |           async_utils.cpython-312.pyc
|       |       |           bccache.cpython-312.pyc
|       |       |           compiler.cpython-312.pyc
|       |       |           constants.cpython-312.pyc
|       |       |           debug.cpython-312.pyc
|       |       |           defaults.cpython-312.pyc
|       |       |           environment.cpython-312.pyc
|       |       |           exceptions.cpython-312.pyc
|       |       |           ext.cpython-312.pyc
|       |       |           filters.cpython-312.pyc
|       |       |           idtracking.cpython-312.pyc
|       |       |           lexer.cpython-312.pyc
|       |       |           loaders.cpython-312.pyc
|       |       |           meta.cpython-312.pyc
|       |       |           nativetypes.cpython-312.pyc
|       |       |           nodes.cpython-312.pyc
|       |       |           optimizer.cpython-312.pyc
|       |       |           parser.cpython-312.pyc
|       |       |           runtime.cpython-312.pyc
|       |       |           sandbox.cpython-312.pyc
|       |       |           tests.cpython-312.pyc
|       |       |           utils.cpython-312.pyc
|       |       |           visitor.cpython-312.pyc
|       |       |           _identifier.cpython-312.pyc
|       |       |           __init__.cpython-312.pyc
|       |       |           
|       |       +---jinja2-3.1.6.dist-info
|       |       |   |   entry_points.txt
|       |       |   |   INSTALLER
|       |       |   |   METADATA
|       |       |   |   RECORD
|       |       |   |   WHEEL
|       |       |   |   
|       |       |   \---licenses
|       |       |           LICENSE.txt
|       |       |           
|       |       +---markupsafe
|       |       |   |   py.typed
|       |       |   |   _native.py
|       |       |   |   _speedups.c
|       |       |   |   _speedups.cp312-win_amd64.pyd
|       |       |   |   _speedups.pyi
|       |       |   |   __init__.py
|       |       |   |   
|       |       |   \---__pycache__
|       |       |           _native.cpython-312.pyc
|       |       |           __init__.cpython-312.pyc
|       |       |           
|       |       +---markupsafe-3.0.3.dist-info
|       |       |   |   INSTALLER
|       |       |   |   METADATA
|       |       |   |   RECORD
|       |       |   |   top_level.txt
|       |       |   |   WHEEL
|       |       |   |   
|       |       |   \---licenses
|       |       |           LICENSE.txt
|       |       |           
|       |       +---pip
|       |       |   |   py.typed
|       |       |   |   __init__.py
|       |       |   |   __main__.py
|       |       |   |   __pip-runner__.py
|       |       |   |   
|       |       |   +---_internal
|       |       |   |   |   build_env.py
|       |       |   |   |   cache.py
|       |       |   |   |   configuration.py
|       |       |   |   |   exceptions.py
|       |       |   |   |   main.py
|       |       |   |   |   pyproject.py
|       |       |   |   |   self_outdated_check.py
|       |       |   |   |   wheel_builder.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   +---cli
|       |       |   |   |   |   autocompletion.py
|       |       |   |   |   |   base_command.py
|       |       |   |   |   |   cmdoptions.py
|       |       |   |   |   |   command_context.py
|       |       |   |   |   |   index_command.py
|       |       |   |   |   |   main.py
|       |       |   |   |   |   main_parser.py
|       |       |   |   |   |   parser.py
|       |       |   |   |   |   progress_bars.py
|       |       |   |   |   |   req_command.py
|       |       |   |   |   |   spinners.py
|       |       |   |   |   |   status_codes.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           autocompletion.cpython-312.pyc
|       |       |   |   |           base_command.cpython-312.pyc
|       |       |   |   |           cmdoptions.cpython-312.pyc
|       |       |   |   |           command_context.cpython-312.pyc
|       |       |   |   |           index_command.cpython-312.pyc
|       |       |   |   |           main.cpython-312.pyc
|       |       |   |   |           main_parser.cpython-312.pyc
|       |       |   |   |           parser.cpython-312.pyc
|       |       |   |   |           progress_bars.cpython-312.pyc
|       |       |   |   |           req_command.cpython-312.pyc
|       |       |   |   |           spinners.cpython-312.pyc
|       |       |   |   |           status_codes.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---commands
|       |       |   |   |   |   cache.py
|       |       |   |   |   |   check.py
|       |       |   |   |   |   completion.py
|       |       |   |   |   |   configuration.py
|       |       |   |   |   |   debug.py
|       |       |   |   |   |   download.py
|       |       |   |   |   |   freeze.py
|       |       |   |   |   |   hash.py
|       |       |   |   |   |   help.py
|       |       |   |   |   |   index.py
|       |       |   |   |   |   inspect.py
|       |       |   |   |   |   install.py
|       |       |   |   |   |   list.py
|       |       |   |   |   |   search.py
|       |       |   |   |   |   show.py
|       |       |   |   |   |   uninstall.py
|       |       |   |   |   |   wheel.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           cache.cpython-312.pyc
|       |       |   |   |           check.cpython-312.pyc
|       |       |   |   |           completion.cpython-312.pyc
|       |       |   |   |           configuration.cpython-312.pyc
|       |       |   |   |           debug.cpython-312.pyc
|       |       |   |   |           download.cpython-312.pyc
|       |       |   |   |           freeze.cpython-312.pyc
|       |       |   |   |           hash.cpython-312.pyc
|       |       |   |   |           help.cpython-312.pyc
|       |       |   |   |           index.cpython-312.pyc
|       |       |   |   |           inspect.cpython-312.pyc
|       |       |   |   |           install.cpython-312.pyc
|       |       |   |   |           list.cpython-312.pyc
|       |       |   |   |           search.cpython-312.pyc
|       |       |   |   |           show.cpython-312.pyc
|       |       |   |   |           uninstall.cpython-312.pyc
|       |       |   |   |           wheel.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---distributions
|       |       |   |   |   |   base.py
|       |       |   |   |   |   installed.py
|       |       |   |   |   |   sdist.py
|       |       |   |   |   |   wheel.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           base.cpython-312.pyc
|       |       |   |   |           installed.cpython-312.pyc
|       |       |   |   |           sdist.cpython-312.pyc
|       |       |   |   |           wheel.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---index
|       |       |   |   |   |   collector.py
|       |       |   |   |   |   package_finder.py
|       |       |   |   |   |   sources.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           collector.cpython-312.pyc
|       |       |   |   |           package_finder.cpython-312.pyc
|       |       |   |   |           sources.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---locations
|       |       |   |   |   |   base.py
|       |       |   |   |   |   _distutils.py
|       |       |   |   |   |   _sysconfig.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           base.cpython-312.pyc
|       |       |   |   |           _distutils.cpython-312.pyc
|       |       |   |   |           _sysconfig.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---metadata
|       |       |   |   |   |   base.py
|       |       |   |   |   |   pkg_resources.py
|       |       |   |   |   |   _json.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   +---importlib
|       |       |   |   |   |   |   _compat.py
|       |       |   |   |   |   |   _dists.py
|       |       |   |   |   |   |   _envs.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           _compat.cpython-312.pyc
|       |       |   |   |   |           _dists.cpython-312.pyc
|       |       |   |   |   |           _envs.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   \---__pycache__
|       |       |   |   |           base.cpython-312.pyc
|       |       |   |   |           pkg_resources.cpython-312.pyc
|       |       |   |   |           _json.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---models
|       |       |   |   |   |   candidate.py
|       |       |   |   |   |   direct_url.py
|       |       |   |   |   |   format_control.py
|       |       |   |   |   |   index.py
|       |       |   |   |   |   installation_report.py
|       |       |   |   |   |   link.py
|       |       |   |   |   |   scheme.py
|       |       |   |   |   |   search_scope.py
|       |       |   |   |   |   selection_prefs.py
|       |       |   |   |   |   target_python.py
|       |       |   |   |   |   wheel.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           candidate.cpython-312.pyc
|       |       |   |   |           direct_url.cpython-312.pyc
|       |       |   |   |           format_control.cpython-312.pyc
|       |       |   |   |           index.cpython-312.pyc
|       |       |   |   |           installation_report.cpython-312.pyc
|       |       |   |   |           link.cpython-312.pyc
|       |       |   |   |           scheme.cpython-312.pyc
|       |       |   |   |           search_scope.cpython-312.pyc
|       |       |   |   |           selection_prefs.cpython-312.pyc
|       |       |   |   |           target_python.cpython-312.pyc
|       |       |   |   |           wheel.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---network
|       |       |   |   |   |   auth.py
|       |       |   |   |   |   cache.py
|       |       |   |   |   |   download.py
|       |       |   |   |   |   lazy_wheel.py
|       |       |   |   |   |   session.py
|       |       |   |   |   |   utils.py
|       |       |   |   |   |   xmlrpc.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           auth.cpython-312.pyc
|       |       |   |   |           cache.cpython-312.pyc
|       |       |   |   |           download.cpython-312.pyc
|       |       |   |   |           lazy_wheel.cpython-312.pyc
|       |       |   |   |           session.cpython-312.pyc
|       |       |   |   |           utils.cpython-312.pyc
|       |       |   |   |           xmlrpc.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---operations
|       |       |   |   |   |   check.py
|       |       |   |   |   |   freeze.py
|       |       |   |   |   |   prepare.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   +---build
|       |       |   |   |   |   |   build_tracker.py
|       |       |   |   |   |   |   metadata.py
|       |       |   |   |   |   |   metadata_editable.py
|       |       |   |   |   |   |   metadata_legacy.py
|       |       |   |   |   |   |   wheel.py
|       |       |   |   |   |   |   wheel_editable.py
|       |       |   |   |   |   |   wheel_legacy.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           build_tracker.cpython-312.pyc
|       |       |   |   |   |           metadata.cpython-312.pyc
|       |       |   |   |   |           metadata_editable.cpython-312.pyc
|       |       |   |   |   |           metadata_legacy.cpython-312.pyc
|       |       |   |   |   |           wheel.cpython-312.pyc
|       |       |   |   |   |           wheel_editable.cpython-312.pyc
|       |       |   |   |   |           wheel_legacy.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   +---install
|       |       |   |   |   |   |   editable_legacy.py
|       |       |   |   |   |   |   wheel.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           editable_legacy.cpython-312.pyc
|       |       |   |   |   |           wheel.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   \---__pycache__
|       |       |   |   |           check.cpython-312.pyc
|       |       |   |   |           freeze.cpython-312.pyc
|       |       |   |   |           prepare.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---req
|       |       |   |   |   |   constructors.py
|       |       |   |   |   |   req_file.py
|       |       |   |   |   |   req_install.py
|       |       |   |   |   |   req_set.py
|       |       |   |   |   |   req_uninstall.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           constructors.cpython-312.pyc
|       |       |   |   |           req_file.cpython-312.pyc
|       |       |   |   |           req_install.cpython-312.pyc
|       |       |   |   |           req_set.cpython-312.pyc
|       |       |   |   |           req_uninstall.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---resolution
|       |       |   |   |   |   base.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   +---legacy
|       |       |   |   |   |   |   resolver.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           resolver.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   +---resolvelib
|       |       |   |   |   |   |   base.py
|       |       |   |   |   |   |   candidates.py
|       |       |   |   |   |   |   factory.py
|       |       |   |   |   |   |   found_candidates.py
|       |       |   |   |   |   |   provider.py
|       |       |   |   |   |   |   reporter.py
|       |       |   |   |   |   |   requirements.py
|       |       |   |   |   |   |   resolver.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           base.cpython-312.pyc
|       |       |   |   |   |           candidates.cpython-312.pyc
|       |       |   |   |   |           factory.cpython-312.pyc
|       |       |   |   |   |           found_candidates.cpython-312.pyc
|       |       |   |   |   |           provider.cpython-312.pyc
|       |       |   |   |   |           reporter.cpython-312.pyc
|       |       |   |   |   |           requirements.cpython-312.pyc
|       |       |   |   |   |           resolver.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   \---__pycache__
|       |       |   |   |           base.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---utils
|       |       |   |   |   |   appdirs.py
|       |       |   |   |   |   compat.py
|       |       |   |   |   |   compatibility_tags.py
|       |       |   |   |   |   datetime.py
|       |       |   |   |   |   deprecation.py
|       |       |   |   |   |   direct_url_helpers.py
|       |       |   |   |   |   egg_link.py
|       |       |   |   |   |   encoding.py
|       |       |   |   |   |   entrypoints.py
|       |       |   |   |   |   filesystem.py
|       |       |   |   |   |   filetypes.py
|       |       |   |   |   |   glibc.py
|       |       |   |   |   |   hashes.py
|       |       |   |   |   |   logging.py
|       |       |   |   |   |   misc.py
|       |       |   |   |   |   packaging.py
|       |       |   |   |   |   retry.py
|       |       |   |   |   |   setuptools_build.py
|       |       |   |   |   |   subprocess.py
|       |       |   |   |   |   temp_dir.py
|       |       |   |   |   |   unpacking.py
|       |       |   |   |   |   urls.py
|       |       |   |   |   |   virtualenv.py
|       |       |   |   |   |   wheel.py
|       |       |   |   |   |   _jaraco_text.py
|       |       |   |   |   |   _log.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           appdirs.cpython-312.pyc
|       |       |   |   |           compat.cpython-312.pyc
|       |       |   |   |           compatibility_tags.cpython-312.pyc
|       |       |   |   |           datetime.cpython-312.pyc
|       |       |   |   |           deprecation.cpython-312.pyc
|       |       |   |   |           direct_url_helpers.cpython-312.pyc
|       |       |   |   |           egg_link.cpython-312.pyc
|       |       |   |   |           encoding.cpython-312.pyc
|       |       |   |   |           entrypoints.cpython-312.pyc
|       |       |   |   |           filesystem.cpython-312.pyc
|       |       |   |   |           filetypes.cpython-312.pyc
|       |       |   |   |           glibc.cpython-312.pyc
|       |       |   |   |           hashes.cpython-312.pyc
|       |       |   |   |           logging.cpython-312.pyc
|       |       |   |   |           misc.cpython-312.pyc
|       |       |   |   |           packaging.cpython-312.pyc
|       |       |   |   |           retry.cpython-312.pyc
|       |       |   |   |           setuptools_build.cpython-312.pyc
|       |       |   |   |           subprocess.cpython-312.pyc
|       |       |   |   |           temp_dir.cpython-312.pyc
|       |       |   |   |           unpacking.cpython-312.pyc
|       |       |   |   |           urls.cpython-312.pyc
|       |       |   |   |           virtualenv.cpython-312.pyc
|       |       |   |   |           wheel.cpython-312.pyc
|       |       |   |   |           _jaraco_text.cpython-312.pyc
|       |       |   |   |           _log.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---vcs
|       |       |   |   |   |   bazaar.py
|       |       |   |   |   |   git.py
|       |       |   |   |   |   mercurial.py
|       |       |   |   |   |   subversion.py
|       |       |   |   |   |   versioncontrol.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           bazaar.cpython-312.pyc
|       |       |   |   |           git.cpython-312.pyc
|       |       |   |   |           mercurial.cpython-312.pyc
|       |       |   |   |           subversion.cpython-312.pyc
|       |       |   |   |           versioncontrol.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   \---__pycache__
|       |       |   |           build_env.cpython-312.pyc
|       |       |   |           cache.cpython-312.pyc
|       |       |   |           configuration.cpython-312.pyc
|       |       |   |           exceptions.cpython-312.pyc
|       |       |   |           main.cpython-312.pyc
|       |       |   |           pyproject.cpython-312.pyc
|       |       |   |           self_outdated_check.cpython-312.pyc
|       |       |   |           wheel_builder.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---_vendor
|       |       |   |   |   typing_extensions.py
|       |       |   |   |   vendor.txt
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   +---cachecontrol
|       |       |   |   |   |   adapter.py
|       |       |   |   |   |   cache.py
|       |       |   |   |   |   controller.py
|       |       |   |   |   |   filewrapper.py
|       |       |   |   |   |   heuristics.py
|       |       |   |   |   |   py.typed
|       |       |   |   |   |   serialize.py
|       |       |   |   |   |   wrapper.py
|       |       |   |   |   |   _cmd.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   +---caches
|       |       |   |   |   |   |   file_cache.py
|       |       |   |   |   |   |   redis_cache.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           file_cache.cpython-312.pyc
|       |       |   |   |   |           redis_cache.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   \---__pycache__
|       |       |   |   |           adapter.cpython-312.pyc
|       |       |   |   |           cache.cpython-312.pyc
|       |       |   |   |           controller.cpython-312.pyc
|       |       |   |   |           filewrapper.cpython-312.pyc
|       |       |   |   |           heuristics.cpython-312.pyc
|       |       |   |   |           serialize.cpython-312.pyc
|       |       |   |   |           wrapper.cpython-312.pyc
|       |       |   |   |           _cmd.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---certifi
|       |       |   |   |   |   cacert.pem
|       |       |   |   |   |   core.py
|       |       |   |   |   |   py.typed
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   __main__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           core.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           __main__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---distlib
|       |       |   |   |   |   compat.py
|       |       |   |   |   |   database.py
|       |       |   |   |   |   index.py
|       |       |   |   |   |   locators.py
|       |       |   |   |   |   manifest.py
|       |       |   |   |   |   markers.py
|       |       |   |   |   |   metadata.py
|       |       |   |   |   |   resources.py
|       |       |   |   |   |   scripts.py
|       |       |   |   |   |   t32.exe
|       |       |   |   |   |   t64-arm.exe
|       |       |   |   |   |   t64.exe
|       |       |   |   |   |   util.py
|       |       |   |   |   |   version.py
|       |       |   |   |   |   w32.exe
|       |       |   |   |   |   w64-arm.exe
|       |       |   |   |   |   w64.exe
|       |       |   |   |   |   wheel.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           compat.cpython-312.pyc
|       |       |   |   |           database.cpython-312.pyc
|       |       |   |   |           index.cpython-312.pyc
|       |       |   |   |           locators.cpython-312.pyc
|       |       |   |   |           manifest.cpython-312.pyc
|       |       |   |   |           markers.cpython-312.pyc
|       |       |   |   |           metadata.cpython-312.pyc
|       |       |   |   |           resources.cpython-312.pyc
|       |       |   |   |           scripts.cpython-312.pyc
|       |       |   |   |           util.cpython-312.pyc
|       |       |   |   |           version.cpython-312.pyc
|       |       |   |   |           wheel.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---distro
|       |       |   |   |   |   distro.py
|       |       |   |   |   |   py.typed
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   __main__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           distro.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           __main__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---idna
|       |       |   |   |   |   codec.py
|       |       |   |   |   |   compat.py
|       |       |   |   |   |   core.py
|       |       |   |   |   |   idnadata.py
|       |       |   |   |   |   intranges.py
|       |       |   |   |   |   package_data.py
|       |       |   |   |   |   py.typed
|       |       |   |   |   |   uts46data.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           codec.cpython-312.pyc
|       |       |   |   |           compat.cpython-312.pyc
|       |       |   |   |           core.cpython-312.pyc
|       |       |   |   |           idnadata.cpython-312.pyc
|       |       |   |   |           intranges.cpython-312.pyc
|       |       |   |   |           package_data.cpython-312.pyc
|       |       |   |   |           uts46data.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---msgpack
|       |       |   |   |   |   exceptions.py
|       |       |   |   |   |   ext.py
|       |       |   |   |   |   fallback.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           exceptions.cpython-312.pyc
|       |       |   |   |           ext.cpython-312.pyc
|       |       |   |   |           fallback.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---packaging
|       |       |   |   |   |   markers.py
|       |       |   |   |   |   metadata.py
|       |       |   |   |   |   py.typed
|       |       |   |   |   |   requirements.py
|       |       |   |   |   |   specifiers.py
|       |       |   |   |   |   tags.py
|       |       |   |   |   |   utils.py
|       |       |   |   |   |   version.py
|       |       |   |   |   |   _elffile.py
|       |       |   |   |   |   _manylinux.py
|       |       |   |   |   |   _musllinux.py
|       |       |   |   |   |   _parser.py
|       |       |   |   |   |   _structures.py
|       |       |   |   |   |   _tokenizer.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           markers.cpython-312.pyc
|       |       |   |   |           metadata.cpython-312.pyc
|       |       |   |   |           requirements.cpython-312.pyc
|       |       |   |   |           specifiers.cpython-312.pyc
|       |       |   |   |           tags.cpython-312.pyc
|       |       |   |   |           utils.cpython-312.pyc
|       |       |   |   |           version.cpython-312.pyc
|       |       |   |   |           _elffile.cpython-312.pyc
|       |       |   |   |           _manylinux.cpython-312.pyc
|       |       |   |   |           _musllinux.cpython-312.pyc
|       |       |   |   |           _parser.cpython-312.pyc
|       |       |   |   |           _structures.cpython-312.pyc
|       |       |   |   |           _tokenizer.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---pkg_resources
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---platformdirs
|       |       |   |   |   |   android.py
|       |       |   |   |   |   api.py
|       |       |   |   |   |   macos.py
|       |       |   |   |   |   py.typed
|       |       |   |   |   |   unix.py
|       |       |   |   |   |   version.py
|       |       |   |   |   |   windows.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   __main__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           android.cpython-312.pyc
|       |       |   |   |           api.cpython-312.pyc
|       |       |   |   |           macos.cpython-312.pyc
|       |       |   |   |           unix.cpython-312.pyc
|       |       |   |   |           version.cpython-312.pyc
|       |       |   |   |           windows.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           __main__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---pygments
|       |       |   |   |   |   cmdline.py
|       |       |   |   |   |   console.py
|       |       |   |   |   |   filter.py
|       |       |   |   |   |   formatter.py
|       |       |   |   |   |   lexer.py
|       |       |   |   |   |   modeline.py
|       |       |   |   |   |   plugin.py
|       |       |   |   |   |   regexopt.py
|       |       |   |   |   |   scanner.py
|       |       |   |   |   |   sphinxext.py
|       |       |   |   |   |   style.py
|       |       |   |   |   |   token.py
|       |       |   |   |   |   unistring.py
|       |       |   |   |   |   util.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   __main__.py
|       |       |   |   |   |   
|       |       |   |   |   +---filters
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   +---formatters
|       |       |   |   |   |   |   bbcode.py
|       |       |   |   |   |   |   groff.py
|       |       |   |   |   |   |   html.py
|       |       |   |   |   |   |   img.py
|       |       |   |   |   |   |   irc.py
|       |       |   |   |   |   |   latex.py
|       |       |   |   |   |   |   other.py
|       |       |   |   |   |   |   pangomarkup.py
|       |       |   |   |   |   |   rtf.py
|       |       |   |   |   |   |   svg.py
|       |       |   |   |   |   |   terminal.py
|       |       |   |   |   |   |   terminal256.py
|       |       |   |   |   |   |   _mapping.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           bbcode.cpython-312.pyc
|       |       |   |   |   |           groff.cpython-312.pyc
|       |       |   |   |   |           html.cpython-312.pyc
|       |       |   |   |   |           img.cpython-312.pyc
|       |       |   |   |   |           irc.cpython-312.pyc
|       |       |   |   |   |           latex.cpython-312.pyc
|       |       |   |   |   |           other.cpython-312.pyc
|       |       |   |   |   |           pangomarkup.cpython-312.pyc
|       |       |   |   |   |           rtf.cpython-312.pyc
|       |       |   |   |   |           svg.cpython-312.pyc
|       |       |   |   |   |           terminal.cpython-312.pyc
|       |       |   |   |   |           terminal256.cpython-312.pyc
|       |       |   |   |   |           _mapping.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   +---lexers
|       |       |   |   |   |   |   python.py
|       |       |   |   |   |   |   _mapping.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           python.cpython-312.pyc
|       |       |   |   |   |           _mapping.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   +---styles
|       |       |   |   |   |   |   _mapping.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           _mapping.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   \---__pycache__
|       |       |   |   |           cmdline.cpython-312.pyc
|       |       |   |   |           console.cpython-312.pyc
|       |       |   |   |           filter.cpython-312.pyc
|       |       |   |   |           formatter.cpython-312.pyc
|       |       |   |   |           lexer.cpython-312.pyc
|       |       |   |   |           modeline.cpython-312.pyc
|       |       |   |   |           plugin.cpython-312.pyc
|       |       |   |   |           regexopt.cpython-312.pyc
|       |       |   |   |           scanner.cpython-312.pyc
|       |       |   |   |           sphinxext.cpython-312.pyc
|       |       |   |   |           style.cpython-312.pyc
|       |       |   |   |           token.cpython-312.pyc
|       |       |   |   |           unistring.cpython-312.pyc
|       |       |   |   |           util.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           __main__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---pyproject_hooks
|       |       |   |   |   |   _compat.py
|       |       |   |   |   |   _impl.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   +---_in_process
|       |       |   |   |   |   |   _in_process.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           _in_process.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   \---__pycache__
|       |       |   |   |           _compat.cpython-312.pyc
|       |       |   |   |           _impl.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---requests
|       |       |   |   |   |   adapters.py
|       |       |   |   |   |   api.py
|       |       |   |   |   |   auth.py
|       |       |   |   |   |   certs.py
|       |       |   |   |   |   compat.py
|       |       |   |   |   |   cookies.py
|       |       |   |   |   |   exceptions.py
|       |       |   |   |   |   help.py
|       |       |   |   |   |   hooks.py
|       |       |   |   |   |   models.py
|       |       |   |   |   |   packages.py
|       |       |   |   |   |   sessions.py
|       |       |   |   |   |   status_codes.py
|       |       |   |   |   |   structures.py
|       |       |   |   |   |   utils.py
|       |       |   |   |   |   _internal_utils.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   __version__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           adapters.cpython-312.pyc
|       |       |   |   |           api.cpython-312.pyc
|       |       |   |   |           auth.cpython-312.pyc
|       |       |   |   |           certs.cpython-312.pyc
|       |       |   |   |           compat.cpython-312.pyc
|       |       |   |   |           cookies.cpython-312.pyc
|       |       |   |   |           exceptions.cpython-312.pyc
|       |       |   |   |           help.cpython-312.pyc
|       |       |   |   |           hooks.cpython-312.pyc
|       |       |   |   |           models.cpython-312.pyc
|       |       |   |   |           packages.cpython-312.pyc
|       |       |   |   |           sessions.cpython-312.pyc
|       |       |   |   |           status_codes.cpython-312.pyc
|       |       |   |   |           structures.cpython-312.pyc
|       |       |   |   |           utils.cpython-312.pyc
|       |       |   |   |           _internal_utils.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           __version__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---resolvelib
|       |       |   |   |   |   providers.py
|       |       |   |   |   |   py.typed
|       |       |   |   |   |   reporters.py
|       |       |   |   |   |   resolvers.py
|       |       |   |   |   |   structs.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   +---compat
|       |       |   |   |   |   |   collections_abc.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           collections_abc.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   \---__pycache__
|       |       |   |   |           providers.cpython-312.pyc
|       |       |   |   |           reporters.cpython-312.pyc
|       |       |   |   |           resolvers.cpython-312.pyc
|       |       |   |   |           structs.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---rich
|       |       |   |   |   |   abc.py
|       |       |   |   |   |   align.py
|       |       |   |   |   |   ansi.py
|       |       |   |   |   |   bar.py
|       |       |   |   |   |   box.py
|       |       |   |   |   |   cells.py
|       |       |   |   |   |   color.py
|       |       |   |   |   |   color_triplet.py
|       |       |   |   |   |   columns.py
|       |       |   |   |   |   console.py
|       |       |   |   |   |   constrain.py
|       |       |   |   |   |   containers.py
|       |       |   |   |   |   control.py
|       |       |   |   |   |   default_styles.py
|       |       |   |   |   |   diagnose.py
|       |       |   |   |   |   emoji.py
|       |       |   |   |   |   errors.py
|       |       |   |   |   |   filesize.py
|       |       |   |   |   |   file_proxy.py
|       |       |   |   |   |   highlighter.py
|       |       |   |   |   |   json.py
|       |       |   |   |   |   jupyter.py
|       |       |   |   |   |   layout.py
|       |       |   |   |   |   live.py
|       |       |   |   |   |   live_render.py
|       |       |   |   |   |   logging.py
|       |       |   |   |   |   markup.py
|       |       |   |   |   |   measure.py
|       |       |   |   |   |   padding.py
|       |       |   |   |   |   pager.py
|       |       |   |   |   |   palette.py
|       |       |   |   |   |   panel.py
|       |       |   |   |   |   pretty.py
|       |       |   |   |   |   progress.py
|       |       |   |   |   |   progress_bar.py
|       |       |   |   |   |   prompt.py
|       |       |   |   |   |   protocol.py
|       |       |   |   |   |   py.typed
|       |       |   |   |   |   region.py
|       |       |   |   |   |   repr.py
|       |       |   |   |   |   rule.py
|       |       |   |   |   |   scope.py
|       |       |   |   |   |   screen.py
|       |       |   |   |   |   segment.py
|       |       |   |   |   |   spinner.py
|       |       |   |   |   |   status.py
|       |       |   |   |   |   style.py
|       |       |   |   |   |   styled.py
|       |       |   |   |   |   syntax.py
|       |       |   |   |   |   table.py
|       |       |   |   |   |   terminal_theme.py
|       |       |   |   |   |   text.py
|       |       |   |   |   |   theme.py
|       |       |   |   |   |   themes.py
|       |       |   |   |   |   traceback.py
|       |       |   |   |   |   tree.py
|       |       |   |   |   |   _cell_widths.py
|       |       |   |   |   |   _emoji_codes.py
|       |       |   |   |   |   _emoji_replace.py
|       |       |   |   |   |   _export_format.py
|       |       |   |   |   |   _extension.py
|       |       |   |   |   |   _fileno.py
|       |       |   |   |   |   _inspect.py
|       |       |   |   |   |   _log_render.py
|       |       |   |   |   |   _loop.py
|       |       |   |   |   |   _null_file.py
|       |       |   |   |   |   _palettes.py
|       |       |   |   |   |   _pick.py
|       |       |   |   |   |   _ratio.py
|       |       |   |   |   |   _spinners.py
|       |       |   |   |   |   _stack.py
|       |       |   |   |   |   _timer.py
|       |       |   |   |   |   _win32_console.py
|       |       |   |   |   |   _windows.py
|       |       |   |   |   |   _windows_renderer.py
|       |       |   |   |   |   _wrap.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   __main__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           abc.cpython-312.pyc
|       |       |   |   |           align.cpython-312.pyc
|       |       |   |   |           ansi.cpython-312.pyc
|       |       |   |   |           bar.cpython-312.pyc
|       |       |   |   |           box.cpython-312.pyc
|       |       |   |   |           cells.cpython-312.pyc
|       |       |   |   |           color.cpython-312.pyc
|       |       |   |   |           color_triplet.cpython-312.pyc
|       |       |   |   |           columns.cpython-312.pyc
|       |       |   |   |           console.cpython-312.pyc
|       |       |   |   |           constrain.cpython-312.pyc
|       |       |   |   |           containers.cpython-312.pyc
|       |       |   |   |           control.cpython-312.pyc
|       |       |   |   |           default_styles.cpython-312.pyc
|       |       |   |   |           diagnose.cpython-312.pyc
|       |       |   |   |           emoji.cpython-312.pyc
|       |       |   |   |           errors.cpython-312.pyc
|       |       |   |   |           filesize.cpython-312.pyc
|       |       |   |   |           file_proxy.cpython-312.pyc
|       |       |   |   |           highlighter.cpython-312.pyc
|       |       |   |   |           json.cpython-312.pyc
|       |       |   |   |           jupyter.cpython-312.pyc
|       |       |   |   |           layout.cpython-312.pyc
|       |       |   |   |           live.cpython-312.pyc
|       |       |   |   |           live_render.cpython-312.pyc
|       |       |   |   |           logging.cpython-312.pyc
|       |       |   |   |           markup.cpython-312.pyc
|       |       |   |   |           measure.cpython-312.pyc
|       |       |   |   |           padding.cpython-312.pyc
|       |       |   |   |           pager.cpython-312.pyc
|       |       |   |   |           palette.cpython-312.pyc
|       |       |   |   |           panel.cpython-312.pyc
|       |       |   |   |           pretty.cpython-312.pyc
|       |       |   |   |           progress.cpython-312.pyc
|       |       |   |   |           progress_bar.cpython-312.pyc
|       |       |   |   |           prompt.cpython-312.pyc
|       |       |   |   |           protocol.cpython-312.pyc
|       |       |   |   |           region.cpython-312.pyc
|       |       |   |   |           repr.cpython-312.pyc
|       |       |   |   |           rule.cpython-312.pyc
|       |       |   |   |           scope.cpython-312.pyc
|       |       |   |   |           screen.cpython-312.pyc
|       |       |   |   |           segment.cpython-312.pyc
|       |       |   |   |           spinner.cpython-312.pyc
|       |       |   |   |           status.cpython-312.pyc
|       |       |   |   |           style.cpython-312.pyc
|       |       |   |   |           styled.cpython-312.pyc
|       |       |   |   |           syntax.cpython-312.pyc
|       |       |   |   |           table.cpython-312.pyc
|       |       |   |   |           terminal_theme.cpython-312.pyc
|       |       |   |   |           text.cpython-312.pyc
|       |       |   |   |           theme.cpython-312.pyc
|       |       |   |   |           themes.cpython-312.pyc
|       |       |   |   |           traceback.cpython-312.pyc
|       |       |   |   |           tree.cpython-312.pyc
|       |       |   |   |           _cell_widths.cpython-312.pyc
|       |       |   |   |           _emoji_codes.cpython-312.pyc
|       |       |   |   |           _emoji_replace.cpython-312.pyc
|       |       |   |   |           _export_format.cpython-312.pyc
|       |       |   |   |           _extension.cpython-312.pyc
|       |       |   |   |           _fileno.cpython-312.pyc
|       |       |   |   |           _inspect.cpython-312.pyc
|       |       |   |   |           _log_render.cpython-312.pyc
|       |       |   |   |           _loop.cpython-312.pyc
|       |       |   |   |           _null_file.cpython-312.pyc
|       |       |   |   |           _palettes.cpython-312.pyc
|       |       |   |   |           _pick.cpython-312.pyc
|       |       |   |   |           _ratio.cpython-312.pyc
|       |       |   |   |           _spinners.cpython-312.pyc
|       |       |   |   |           _stack.cpython-312.pyc
|       |       |   |   |           _timer.cpython-312.pyc
|       |       |   |   |           _win32_console.cpython-312.pyc
|       |       |   |   |           _windows.cpython-312.pyc
|       |       |   |   |           _windows_renderer.cpython-312.pyc
|       |       |   |   |           _wrap.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           __main__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---tomli
|       |       |   |   |   |   py.typed
|       |       |   |   |   |   _parser.py
|       |       |   |   |   |   _re.py
|       |       |   |   |   |   _types.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           _parser.cpython-312.pyc
|       |       |   |   |           _re.cpython-312.pyc
|       |       |   |   |           _types.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---truststore
|       |       |   |   |   |   py.typed
|       |       |   |   |   |   _api.py
|       |       |   |   |   |   _macos.py
|       |       |   |   |   |   _openssl.py
|       |       |   |   |   |   _ssl_constants.py
|       |       |   |   |   |   _windows.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           _api.cpython-312.pyc
|       |       |   |   |           _macos.cpython-312.pyc
|       |       |   |   |           _openssl.cpython-312.pyc
|       |       |   |   |           _ssl_constants.cpython-312.pyc
|       |       |   |   |           _windows.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---urllib3
|       |       |   |   |   |   connection.py
|       |       |   |   |   |   connectionpool.py
|       |       |   |   |   |   exceptions.py
|       |       |   |   |   |   fields.py
|       |       |   |   |   |   filepost.py
|       |       |   |   |   |   poolmanager.py
|       |       |   |   |   |   request.py
|       |       |   |   |   |   response.py
|       |       |   |   |   |   _collections.py
|       |       |   |   |   |   _version.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   +---contrib
|       |       |   |   |   |   |   appengine.py
|       |       |   |   |   |   |   ntlmpool.py
|       |       |   |   |   |   |   pyopenssl.py
|       |       |   |   |   |   |   securetransport.py
|       |       |   |   |   |   |   socks.py
|       |       |   |   |   |   |   _appengine_environ.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   +---_securetransport
|       |       |   |   |   |   |   |   bindings.py
|       |       |   |   |   |   |   |   low_level.py
|       |       |   |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   |   
|       |       |   |   |   |   |   \---__pycache__
|       |       |   |   |   |   |           bindings.cpython-312.pyc
|       |       |   |   |   |   |           low_level.cpython-312.pyc
|       |       |   |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |   |           
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           appengine.cpython-312.pyc
|       |       |   |   |   |           ntlmpool.cpython-312.pyc
|       |       |   |   |   |           pyopenssl.cpython-312.pyc
|       |       |   |   |   |           securetransport.cpython-312.pyc
|       |       |   |   |   |           socks.cpython-312.pyc
|       |       |   |   |   |           _appengine_environ.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   +---packages
|       |       |   |   |   |   |   six.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   +---backports
|       |       |   |   |   |   |   |   makefile.py
|       |       |   |   |   |   |   |   weakref_finalize.py
|       |       |   |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   |   
|       |       |   |   |   |   |   \---__pycache__
|       |       |   |   |   |   |           makefile.cpython-312.pyc
|       |       |   |   |   |   |           weakref_finalize.cpython-312.pyc
|       |       |   |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |   |           
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           six.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   +---util
|       |       |   |   |   |   |   connection.py
|       |       |   |   |   |   |   proxy.py
|       |       |   |   |   |   |   queue.py
|       |       |   |   |   |   |   request.py
|       |       |   |   |   |   |   response.py
|       |       |   |   |   |   |   retry.py
|       |       |   |   |   |   |   ssltransport.py
|       |       |   |   |   |   |   ssl_.py
|       |       |   |   |   |   |   ssl_match_hostname.py
|       |       |   |   |   |   |   timeout.py
|       |       |   |   |   |   |   url.py
|       |       |   |   |   |   |   wait.py
|       |       |   |   |   |   |   __init__.py
|       |       |   |   |   |   |   
|       |       |   |   |   |   \---__pycache__
|       |       |   |   |   |           connection.cpython-312.pyc
|       |       |   |   |   |           proxy.cpython-312.pyc
|       |       |   |   |   |           queue.cpython-312.pyc
|       |       |   |   |   |           request.cpython-312.pyc
|       |       |   |   |   |           response.cpython-312.pyc
|       |       |   |   |   |           retry.cpython-312.pyc
|       |       |   |   |   |           ssltransport.cpython-312.pyc
|       |       |   |   |   |           ssl_.cpython-312.pyc
|       |       |   |   |   |           ssl_match_hostname.cpython-312.pyc
|       |       |   |   |   |           timeout.cpython-312.pyc
|       |       |   |   |   |           url.cpython-312.pyc
|       |       |   |   |   |           wait.cpython-312.pyc
|       |       |   |   |   |           __init__.cpython-312.pyc
|       |       |   |   |   |           
|       |       |   |   |   \---__pycache__
|       |       |   |   |           connection.cpython-312.pyc
|       |       |   |   |           connectionpool.cpython-312.pyc
|       |       |   |   |           exceptions.cpython-312.pyc
|       |       |   |   |           fields.cpython-312.pyc
|       |       |   |   |           filepost.cpython-312.pyc
|       |       |   |   |           poolmanager.cpython-312.pyc
|       |       |   |   |           request.cpython-312.pyc
|       |       |   |   |           response.cpython-312.pyc
|       |       |   |   |           _collections.cpython-312.pyc
|       |       |   |   |           _version.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   \---__pycache__
|       |       |   |           typing_extensions.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   \---__pycache__
|       |       |           __init__.cpython-312.pyc
|       |       |           __main__.cpython-312.pyc
|       |       |           __pip-runner__.cpython-312.pyc
|       |       |           
|       |       +---pip-24.2.dist-info
|       |       |       AUTHORS.txt
|       |       |       entry_points.txt
|       |       |       INSTALLER
|       |       |       LICENSE.txt
|       |       |       METADATA
|       |       |       RECORD
|       |       |       REQUESTED
|       |       |       top_level.txt
|       |       |       WHEEL
|       |       |       
|       |       +---sqlalchemy
|       |       |   |   events.py
|       |       |   |   exc.py
|       |       |   |   inspection.py
|       |       |   |   log.py
|       |       |   |   py.typed
|       |       |   |   schema.py
|       |       |   |   types.py
|       |       |   |   __init__.py
|       |       |   |   
|       |       |   +---connectors
|       |       |   |   |   aioodbc.py
|       |       |   |   |   asyncio.py
|       |       |   |   |   pyodbc.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           aioodbc.cpython-312.pyc
|       |       |   |           asyncio.cpython-312.pyc
|       |       |   |           pyodbc.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---cyextension
|       |       |   |   |   collections.cp312-win_amd64.pyd
|       |       |   |   |   collections.pyx
|       |       |   |   |   immutabledict.cp312-win_amd64.pyd
|       |       |   |   |   immutabledict.pxd
|       |       |   |   |   immutabledict.pyx
|       |       |   |   |   processors.cp312-win_amd64.pyd
|       |       |   |   |   processors.pyx
|       |       |   |   |   resultproxy.cp312-win_amd64.pyd
|       |       |   |   |   resultproxy.pyx
|       |       |   |   |   util.cp312-win_amd64.pyd
|       |       |   |   |   util.pyx
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---dialects
|       |       |   |   |   type_migration_guidelines.txt
|       |       |   |   |   _typing.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   +---mssql
|       |       |   |   |   |   aioodbc.py
|       |       |   |   |   |   base.py
|       |       |   |   |   |   information_schema.py
|       |       |   |   |   |   json.py
|       |       |   |   |   |   provision.py
|       |       |   |   |   |   pymssql.py
|       |       |   |   |   |   pyodbc.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           aioodbc.cpython-312.pyc
|       |       |   |   |           base.cpython-312.pyc
|       |       |   |   |           information_schema.cpython-312.pyc
|       |       |   |   |           json.cpython-312.pyc
|       |       |   |   |           provision.cpython-312.pyc
|       |       |   |   |           pymssql.cpython-312.pyc
|       |       |   |   |           pyodbc.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---mysql
|       |       |   |   |   |   aiomysql.py
|       |       |   |   |   |   asyncmy.py
|       |       |   |   |   |   base.py
|       |       |   |   |   |   cymysql.py
|       |       |   |   |   |   dml.py
|       |       |   |   |   |   enumerated.py
|       |       |   |   |   |   expression.py
|       |       |   |   |   |   json.py
|       |       |   |   |   |   mariadb.py
|       |       |   |   |   |   mariadbconnector.py
|       |       |   |   |   |   mysqlconnector.py
|       |       |   |   |   |   mysqldb.py
|       |       |   |   |   |   provision.py
|       |       |   |   |   |   pymysql.py
|       |       |   |   |   |   pyodbc.py
|       |       |   |   |   |   reflection.py
|       |       |   |   |   |   reserved_words.py
|       |       |   |   |   |   types.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           aiomysql.cpython-312.pyc
|       |       |   |   |           asyncmy.cpython-312.pyc
|       |       |   |   |           base.cpython-312.pyc
|       |       |   |   |           cymysql.cpython-312.pyc
|       |       |   |   |           dml.cpython-312.pyc
|       |       |   |   |           enumerated.cpython-312.pyc
|       |       |   |   |           expression.cpython-312.pyc
|       |       |   |   |           json.cpython-312.pyc
|       |       |   |   |           mariadb.cpython-312.pyc
|       |       |   |   |           mariadbconnector.cpython-312.pyc
|       |       |   |   |           mysqlconnector.cpython-312.pyc
|       |       |   |   |           mysqldb.cpython-312.pyc
|       |       |   |   |           provision.cpython-312.pyc
|       |       |   |   |           pymysql.cpython-312.pyc
|       |       |   |   |           pyodbc.cpython-312.pyc
|       |       |   |   |           reflection.cpython-312.pyc
|       |       |   |   |           reserved_words.cpython-312.pyc
|       |       |   |   |           types.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---oracle
|       |       |   |   |   |   base.py
|       |       |   |   |   |   cx_oracle.py
|       |       |   |   |   |   dictionary.py
|       |       |   |   |   |   oracledb.py
|       |       |   |   |   |   provision.py
|       |       |   |   |   |   types.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           base.cpython-312.pyc
|       |       |   |   |           cx_oracle.cpython-312.pyc
|       |       |   |   |           dictionary.cpython-312.pyc
|       |       |   |   |           oracledb.cpython-312.pyc
|       |       |   |   |           provision.cpython-312.pyc
|       |       |   |   |           types.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---postgresql
|       |       |   |   |   |   array.py
|       |       |   |   |   |   asyncpg.py
|       |       |   |   |   |   base.py
|       |       |   |   |   |   dml.py
|       |       |   |   |   |   ext.py
|       |       |   |   |   |   hstore.py
|       |       |   |   |   |   json.py
|       |       |   |   |   |   named_types.py
|       |       |   |   |   |   operators.py
|       |       |   |   |   |   pg8000.py
|       |       |   |   |   |   pg_catalog.py
|       |       |   |   |   |   provision.py
|       |       |   |   |   |   psycopg.py
|       |       |   |   |   |   psycopg2.py
|       |       |   |   |   |   psycopg2cffi.py
|       |       |   |   |   |   ranges.py
|       |       |   |   |   |   types.py
|       |       |   |   |   |   _psycopg_common.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           array.cpython-312.pyc
|       |       |   |   |           asyncpg.cpython-312.pyc
|       |       |   |   |           base.cpython-312.pyc
|       |       |   |   |           dml.cpython-312.pyc
|       |       |   |   |           ext.cpython-312.pyc
|       |       |   |   |           hstore.cpython-312.pyc
|       |       |   |   |           json.cpython-312.pyc
|       |       |   |   |           named_types.cpython-312.pyc
|       |       |   |   |           operators.cpython-312.pyc
|       |       |   |   |           pg8000.cpython-312.pyc
|       |       |   |   |           pg_catalog.cpython-312.pyc
|       |       |   |   |           provision.cpython-312.pyc
|       |       |   |   |           psycopg.cpython-312.pyc
|       |       |   |   |           psycopg2.cpython-312.pyc
|       |       |   |   |           psycopg2cffi.cpython-312.pyc
|       |       |   |   |           ranges.cpython-312.pyc
|       |       |   |   |           types.cpython-312.pyc
|       |       |   |   |           _psycopg_common.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---sqlite
|       |       |   |   |   |   aiosqlite.py
|       |       |   |   |   |   base.py
|       |       |   |   |   |   dml.py
|       |       |   |   |   |   json.py
|       |       |   |   |   |   provision.py
|       |       |   |   |   |   pysqlcipher.py
|       |       |   |   |   |   pysqlite.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           aiosqlite.cpython-312.pyc
|       |       |   |   |           base.cpython-312.pyc
|       |       |   |   |           dml.cpython-312.pyc
|       |       |   |   |           json.cpython-312.pyc
|       |       |   |   |           provision.cpython-312.pyc
|       |       |   |   |           pysqlcipher.cpython-312.pyc
|       |       |   |   |           pysqlite.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   \---__pycache__
|       |       |   |           _typing.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---engine
|       |       |   |   |   base.py
|       |       |   |   |   characteristics.py
|       |       |   |   |   create.py
|       |       |   |   |   cursor.py
|       |       |   |   |   default.py
|       |       |   |   |   events.py
|       |       |   |   |   interfaces.py
|       |       |   |   |   mock.py
|       |       |   |   |   processors.py
|       |       |   |   |   reflection.py
|       |       |   |   |   result.py
|       |       |   |   |   row.py
|       |       |   |   |   strategies.py
|       |       |   |   |   url.py
|       |       |   |   |   util.py
|       |       |   |   |   _py_processors.py
|       |       |   |   |   _py_row.py
|       |       |   |   |   _py_util.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           base.cpython-312.pyc
|       |       |   |           characteristics.cpython-312.pyc
|       |       |   |           create.cpython-312.pyc
|       |       |   |           cursor.cpython-312.pyc
|       |       |   |           default.cpython-312.pyc
|       |       |   |           events.cpython-312.pyc
|       |       |   |           interfaces.cpython-312.pyc
|       |       |   |           mock.cpython-312.pyc
|       |       |   |           processors.cpython-312.pyc
|       |       |   |           reflection.cpython-312.pyc
|       |       |   |           result.cpython-312.pyc
|       |       |   |           row.cpython-312.pyc
|       |       |   |           strategies.cpython-312.pyc
|       |       |   |           url.cpython-312.pyc
|       |       |   |           util.cpython-312.pyc
|       |       |   |           _py_processors.cpython-312.pyc
|       |       |   |           _py_row.cpython-312.pyc
|       |       |   |           _py_util.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---event
|       |       |   |   |   api.py
|       |       |   |   |   attr.py
|       |       |   |   |   base.py
|       |       |   |   |   legacy.py
|       |       |   |   |   registry.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           api.cpython-312.pyc
|       |       |   |           attr.cpython-312.pyc
|       |       |   |           base.cpython-312.pyc
|       |       |   |           legacy.cpython-312.pyc
|       |       |   |           registry.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---ext
|       |       |   |   |   associationproxy.py
|       |       |   |   |   automap.py
|       |       |   |   |   baked.py
|       |       |   |   |   compiler.py
|       |       |   |   |   horizontal_shard.py
|       |       |   |   |   hybrid.py
|       |       |   |   |   indexable.py
|       |       |   |   |   instrumentation.py
|       |       |   |   |   mutable.py
|       |       |   |   |   orderinglist.py
|       |       |   |   |   serializer.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   +---asyncio
|       |       |   |   |   |   base.py
|       |       |   |   |   |   engine.py
|       |       |   |   |   |   exc.py
|       |       |   |   |   |   result.py
|       |       |   |   |   |   scoping.py
|       |       |   |   |   |   session.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           base.cpython-312.pyc
|       |       |   |   |           engine.cpython-312.pyc
|       |       |   |   |           exc.cpython-312.pyc
|       |       |   |   |           result.cpython-312.pyc
|       |       |   |   |           scoping.cpython-312.pyc
|       |       |   |   |           session.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---declarative
|       |       |   |   |   |   extensions.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           extensions.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---mypy
|       |       |   |   |   |   apply.py
|       |       |   |   |   |   decl_class.py
|       |       |   |   |   |   infer.py
|       |       |   |   |   |   names.py
|       |       |   |   |   |   plugin.py
|       |       |   |   |   |   util.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           apply.cpython-312.pyc
|       |       |   |   |           decl_class.cpython-312.pyc
|       |       |   |   |           infer.cpython-312.pyc
|       |       |   |   |           names.cpython-312.pyc
|       |       |   |   |           plugin.cpython-312.pyc
|       |       |   |   |           util.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   \---__pycache__
|       |       |   |           associationproxy.cpython-312.pyc
|       |       |   |           automap.cpython-312.pyc
|       |       |   |           baked.cpython-312.pyc
|       |       |   |           compiler.cpython-312.pyc
|       |       |   |           horizontal_shard.cpython-312.pyc
|       |       |   |           hybrid.cpython-312.pyc
|       |       |   |           indexable.cpython-312.pyc
|       |       |   |           instrumentation.cpython-312.pyc
|       |       |   |           mutable.cpython-312.pyc
|       |       |   |           orderinglist.cpython-312.pyc
|       |       |   |           serializer.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---future
|       |       |   |   |   engine.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           engine.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---orm
|       |       |   |   |   attributes.py
|       |       |   |   |   base.py
|       |       |   |   |   bulk_persistence.py
|       |       |   |   |   clsregistry.py
|       |       |   |   |   collections.py
|       |       |   |   |   context.py
|       |       |   |   |   decl_api.py
|       |       |   |   |   decl_base.py
|       |       |   |   |   dependency.py
|       |       |   |   |   descriptor_props.py
|       |       |   |   |   dynamic.py
|       |       |   |   |   evaluator.py
|       |       |   |   |   events.py
|       |       |   |   |   exc.py
|       |       |   |   |   identity.py
|       |       |   |   |   instrumentation.py
|       |       |   |   |   interfaces.py
|       |       |   |   |   loading.py
|       |       |   |   |   mapped_collection.py
|       |       |   |   |   mapper.py
|       |       |   |   |   path_registry.py
|       |       |   |   |   persistence.py
|       |       |   |   |   properties.py
|       |       |   |   |   query.py
|       |       |   |   |   relationships.py
|       |       |   |   |   scoping.py
|       |       |   |   |   session.py
|       |       |   |   |   state.py
|       |       |   |   |   state_changes.py
|       |       |   |   |   strategies.py
|       |       |   |   |   strategy_options.py
|       |       |   |   |   sync.py
|       |       |   |   |   unitofwork.py
|       |       |   |   |   util.py
|       |       |   |   |   writeonly.py
|       |       |   |   |   _orm_constructors.py
|       |       |   |   |   _typing.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           attributes.cpython-312.pyc
|       |       |   |           base.cpython-312.pyc
|       |       |   |           bulk_persistence.cpython-312.pyc
|       |       |   |           clsregistry.cpython-312.pyc
|       |       |   |           collections.cpython-312.pyc
|       |       |   |           context.cpython-312.pyc
|       |       |   |           decl_api.cpython-312.pyc
|       |       |   |           decl_base.cpython-312.pyc
|       |       |   |           dependency.cpython-312.pyc
|       |       |   |           descriptor_props.cpython-312.pyc
|       |       |   |           dynamic.cpython-312.pyc
|       |       |   |           evaluator.cpython-312.pyc
|       |       |   |           events.cpython-312.pyc
|       |       |   |           exc.cpython-312.pyc
|       |       |   |           identity.cpython-312.pyc
|       |       |   |           instrumentation.cpython-312.pyc
|       |       |   |           interfaces.cpython-312.pyc
|       |       |   |           loading.cpython-312.pyc
|       |       |   |           mapped_collection.cpython-312.pyc
|       |       |   |           mapper.cpython-312.pyc
|       |       |   |           path_registry.cpython-312.pyc
|       |       |   |           persistence.cpython-312.pyc
|       |       |   |           properties.cpython-312.pyc
|       |       |   |           query.cpython-312.pyc
|       |       |   |           relationships.cpython-312.pyc
|       |       |   |           scoping.cpython-312.pyc
|       |       |   |           session.cpython-312.pyc
|       |       |   |           state.cpython-312.pyc
|       |       |   |           state_changes.cpython-312.pyc
|       |       |   |           strategies.cpython-312.pyc
|       |       |   |           strategy_options.cpython-312.pyc
|       |       |   |           sync.cpython-312.pyc
|       |       |   |           unitofwork.cpython-312.pyc
|       |       |   |           util.cpython-312.pyc
|       |       |   |           writeonly.cpython-312.pyc
|       |       |   |           _orm_constructors.cpython-312.pyc
|       |       |   |           _typing.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---pool
|       |       |   |   |   base.py
|       |       |   |   |   events.py
|       |       |   |   |   impl.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           base.cpython-312.pyc
|       |       |   |           events.cpython-312.pyc
|       |       |   |           impl.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---sql
|       |       |   |   |   annotation.py
|       |       |   |   |   base.py
|       |       |   |   |   cache_key.py
|       |       |   |   |   coercions.py
|       |       |   |   |   compiler.py
|       |       |   |   |   crud.py
|       |       |   |   |   ddl.py
|       |       |   |   |   default_comparator.py
|       |       |   |   |   dml.py
|       |       |   |   |   elements.py
|       |       |   |   |   events.py
|       |       |   |   |   expression.py
|       |       |   |   |   functions.py
|       |       |   |   |   lambdas.py
|       |       |   |   |   naming.py
|       |       |   |   |   operators.py
|       |       |   |   |   roles.py
|       |       |   |   |   schema.py
|       |       |   |   |   selectable.py
|       |       |   |   |   sqltypes.py
|       |       |   |   |   traversals.py
|       |       |   |   |   type_api.py
|       |       |   |   |   util.py
|       |       |   |   |   visitors.py
|       |       |   |   |   _dml_constructors.py
|       |       |   |   |   _elements_constructors.py
|       |       |   |   |   _orm_types.py
|       |       |   |   |   _py_util.py
|       |       |   |   |   _selectable_constructors.py
|       |       |   |   |   _typing.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           annotation.cpython-312.pyc
|       |       |   |           base.cpython-312.pyc
|       |       |   |           cache_key.cpython-312.pyc
|       |       |   |           coercions.cpython-312.pyc
|       |       |   |           compiler.cpython-312.pyc
|       |       |   |           crud.cpython-312.pyc
|       |       |   |           ddl.cpython-312.pyc
|       |       |   |           default_comparator.cpython-312.pyc
|       |       |   |           dml.cpython-312.pyc
|       |       |   |           elements.cpython-312.pyc
|       |       |   |           events.cpython-312.pyc
|       |       |   |           expression.cpython-312.pyc
|       |       |   |           functions.cpython-312.pyc
|       |       |   |           lambdas.cpython-312.pyc
|       |       |   |           naming.cpython-312.pyc
|       |       |   |           operators.cpython-312.pyc
|       |       |   |           roles.cpython-312.pyc
|       |       |   |           schema.cpython-312.pyc
|       |       |   |           selectable.cpython-312.pyc
|       |       |   |           sqltypes.cpython-312.pyc
|       |       |   |           traversals.cpython-312.pyc
|       |       |   |           type_api.cpython-312.pyc
|       |       |   |           util.cpython-312.pyc
|       |       |   |           visitors.cpython-312.pyc
|       |       |   |           _dml_constructors.cpython-312.pyc
|       |       |   |           _elements_constructors.cpython-312.pyc
|       |       |   |           _orm_types.cpython-312.pyc
|       |       |   |           _py_util.cpython-312.pyc
|       |       |   |           _selectable_constructors.cpython-312.pyc
|       |       |   |           _typing.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---testing
|       |       |   |   |   assertions.py
|       |       |   |   |   assertsql.py
|       |       |   |   |   asyncio.py
|       |       |   |   |   config.py
|       |       |   |   |   engines.py
|       |       |   |   |   entities.py
|       |       |   |   |   exclusions.py
|       |       |   |   |   pickleable.py
|       |       |   |   |   profiling.py
|       |       |   |   |   provision.py
|       |       |   |   |   requirements.py
|       |       |   |   |   schema.py
|       |       |   |   |   util.py
|       |       |   |   |   warnings.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   +---fixtures
|       |       |   |   |   |   base.py
|       |       |   |   |   |   mypy.py
|       |       |   |   |   |   orm.py
|       |       |   |   |   |   sql.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           base.cpython-312.pyc
|       |       |   |   |           mypy.cpython-312.pyc
|       |       |   |   |           orm.cpython-312.pyc
|       |       |   |   |           sql.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---plugin
|       |       |   |   |   |   bootstrap.py
|       |       |   |   |   |   plugin_base.py
|       |       |   |   |   |   pytestplugin.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           bootstrap.cpython-312.pyc
|       |       |   |   |           plugin_base.cpython-312.pyc
|       |       |   |   |           pytestplugin.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   +---suite
|       |       |   |   |   |   test_cte.py
|       |       |   |   |   |   test_ddl.py
|       |       |   |   |   |   test_deprecations.py
|       |       |   |   |   |   test_dialect.py
|       |       |   |   |   |   test_insert.py
|       |       |   |   |   |   test_reflection.py
|       |       |   |   |   |   test_results.py
|       |       |   |   |   |   test_rowcount.py
|       |       |   |   |   |   test_select.py
|       |       |   |   |   |   test_sequence.py
|       |       |   |   |   |   test_types.py
|       |       |   |   |   |   test_unicode_ddl.py
|       |       |   |   |   |   test_update_delete.py
|       |       |   |   |   |   __init__.py
|       |       |   |   |   |   
|       |       |   |   |   \---__pycache__
|       |       |   |   |           test_cte.cpython-312.pyc
|       |       |   |   |           test_ddl.cpython-312.pyc
|       |       |   |   |           test_deprecations.cpython-312.pyc
|       |       |   |   |           test_dialect.cpython-312.pyc
|       |       |   |   |           test_insert.cpython-312.pyc
|       |       |   |   |           test_reflection.cpython-312.pyc
|       |       |   |   |           test_results.cpython-312.pyc
|       |       |   |   |           test_rowcount.cpython-312.pyc
|       |       |   |   |           test_select.cpython-312.pyc
|       |       |   |   |           test_sequence.cpython-312.pyc
|       |       |   |   |           test_types.cpython-312.pyc
|       |       |   |   |           test_unicode_ddl.cpython-312.pyc
|       |       |   |   |           test_update_delete.cpython-312.pyc
|       |       |   |   |           __init__.cpython-312.pyc
|       |       |   |   |           
|       |       |   |   \---__pycache__
|       |       |   |           assertions.cpython-312.pyc
|       |       |   |           assertsql.cpython-312.pyc
|       |       |   |           asyncio.cpython-312.pyc
|       |       |   |           config.cpython-312.pyc
|       |       |   |           engines.cpython-312.pyc
|       |       |   |           entities.cpython-312.pyc
|       |       |   |           exclusions.cpython-312.pyc
|       |       |   |           pickleable.cpython-312.pyc
|       |       |   |           profiling.cpython-312.pyc
|       |       |   |           provision.cpython-312.pyc
|       |       |   |           requirements.cpython-312.pyc
|       |       |   |           schema.cpython-312.pyc
|       |       |   |           util.cpython-312.pyc
|       |       |   |           warnings.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---util
|       |       |   |   |   compat.py
|       |       |   |   |   concurrency.py
|       |       |   |   |   deprecations.py
|       |       |   |   |   langhelpers.py
|       |       |   |   |   preloaded.py
|       |       |   |   |   queue.py
|       |       |   |   |   tool_support.py
|       |       |   |   |   topological.py
|       |       |   |   |   typing.py
|       |       |   |   |   _collections.py
|       |       |   |   |   _concurrency_py3k.py
|       |       |   |   |   _has_cy.py
|       |       |   |   |   _py_collections.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           compat.cpython-312.pyc
|       |       |   |           concurrency.cpython-312.pyc
|       |       |   |           deprecations.cpython-312.pyc
|       |       |   |           langhelpers.cpython-312.pyc
|       |       |   |           preloaded.cpython-312.pyc
|       |       |   |           queue.cpython-312.pyc
|       |       |   |           tool_support.cpython-312.pyc
|       |       |   |           topological.cpython-312.pyc
|       |       |   |           typing.cpython-312.pyc
|       |       |   |           _collections.cpython-312.pyc
|       |       |   |           _concurrency_py3k.cpython-312.pyc
|       |       |   |           _has_cy.cpython-312.pyc
|       |       |   |           _py_collections.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   \---__pycache__
|       |       |           events.cpython-312.pyc
|       |       |           exc.cpython-312.pyc
|       |       |           inspection.cpython-312.pyc
|       |       |           log.cpython-312.pyc
|       |       |           schema.cpython-312.pyc
|       |       |           types.cpython-312.pyc
|       |       |           __init__.cpython-312.pyc
|       |       |           
|       |       +---SQLAlchemy-2.0.31.dist-info
|       |       |       INSTALLER
|       |       |       LICENSE
|       |       |       METADATA
|       |       |       RECORD
|       |       |       REQUESTED
|       |       |       top_level.txt
|       |       |       WHEEL
|       |       |       
|       |       +---typing_extensions-4.15.0.dist-info
|       |       |   |   INSTALLER
|       |       |   |   METADATA
|       |       |   |   RECORD
|       |       |   |   WHEEL
|       |       |   |   
|       |       |   \---licenses
|       |       |           LICENSE
|       |       |           
|       |       +---werkzeug
|       |       |   |   exceptions.py
|       |       |   |   formparser.py
|       |       |   |   http.py
|       |       |   |   local.py
|       |       |   |   py.typed
|       |       |   |   security.py
|       |       |   |   serving.py
|       |       |   |   test.py
|       |       |   |   testapp.py
|       |       |   |   urls.py
|       |       |   |   user_agent.py
|       |       |   |   utils.py
|       |       |   |   wsgi.py
|       |       |   |   _internal.py
|       |       |   |   _reloader.py
|       |       |   |   __init__.py
|       |       |   |   
|       |       |   +---datastructures
|       |       |   |   |   accept.py
|       |       |   |   |   auth.py
|       |       |   |   |   cache_control.py
|       |       |   |   |   csp.py
|       |       |   |   |   etag.py
|       |       |   |   |   file_storage.py
|       |       |   |   |   headers.py
|       |       |   |   |   mixins.py
|       |       |   |   |   range.py
|       |       |   |   |   structures.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           accept.cpython-312.pyc
|       |       |   |           auth.cpython-312.pyc
|       |       |   |           cache_control.cpython-312.pyc
|       |       |   |           csp.cpython-312.pyc
|       |       |   |           etag.cpython-312.pyc
|       |       |   |           file_storage.cpython-312.pyc
|       |       |   |           headers.cpython-312.pyc
|       |       |   |           mixins.cpython-312.pyc
|       |       |   |           range.cpython-312.pyc
|       |       |   |           structures.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---debug
|       |       |   |   |   console.py
|       |       |   |   |   repr.py
|       |       |   |   |   tbtools.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   +---shared
|       |       |   |   |       console.png
|       |       |   |   |       debugger.js
|       |       |   |   |       ICON_LICENSE.md
|       |       |   |   |       less.png
|       |       |   |   |       more.png
|       |       |   |   |       style.css
|       |       |   |   |       
|       |       |   |   \---__pycache__
|       |       |   |           console.cpython-312.pyc
|       |       |   |           repr.cpython-312.pyc
|       |       |   |           tbtools.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---middleware
|       |       |   |   |   dispatcher.py
|       |       |   |   |   http_proxy.py
|       |       |   |   |   lint.py
|       |       |   |   |   profiler.py
|       |       |   |   |   proxy_fix.py
|       |       |   |   |   shared_data.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           dispatcher.cpython-312.pyc
|       |       |   |           http_proxy.cpython-312.pyc
|       |       |   |           lint.cpython-312.pyc
|       |       |   |           profiler.cpython-312.pyc
|       |       |   |           proxy_fix.cpython-312.pyc
|       |       |   |           shared_data.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---routing
|       |       |   |   |   converters.py
|       |       |   |   |   exceptions.py
|       |       |   |   |   map.py
|       |       |   |   |   matcher.py
|       |       |   |   |   rules.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           converters.cpython-312.pyc
|       |       |   |           exceptions.cpython-312.pyc
|       |       |   |           map.cpython-312.pyc
|       |       |   |           matcher.cpython-312.pyc
|       |       |   |           rules.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---sansio
|       |       |   |   |   http.py
|       |       |   |   |   multipart.py
|       |       |   |   |   request.py
|       |       |   |   |   response.py
|       |       |   |   |   utils.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           http.cpython-312.pyc
|       |       |   |           multipart.cpython-312.pyc
|       |       |   |           request.cpython-312.pyc
|       |       |   |           response.cpython-312.pyc
|       |       |   |           utils.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   +---wrappers
|       |       |   |   |   request.py
|       |       |   |   |   response.py
|       |       |   |   |   __init__.py
|       |       |   |   |   
|       |       |   |   \---__pycache__
|       |       |   |           request.cpython-312.pyc
|       |       |   |           response.cpython-312.pyc
|       |       |   |           __init__.cpython-312.pyc
|       |       |   |           
|       |       |   \---__pycache__
|       |       |           exceptions.cpython-312.pyc
|       |       |           formparser.cpython-312.pyc
|       |       |           http.cpython-312.pyc
|       |       |           local.cpython-312.pyc
|       |       |           security.cpython-312.pyc
|       |       |           serving.cpython-312.pyc
|       |       |           test.cpython-312.pyc
|       |       |           testapp.cpython-312.pyc
|       |       |           urls.cpython-312.pyc
|       |       |           user_agent.cpython-312.pyc
|       |       |           utils.cpython-312.pyc
|       |       |           wsgi.cpython-312.pyc
|       |       |           _internal.cpython-312.pyc
|       |       |           _reloader.cpython-312.pyc
|       |       |           __init__.cpython-312.pyc
|       |       |           
|       |       +---werkzeug-3.1.3.dist-info
|       |       |       INSTALLER
|       |       |       LICENSE.txt
|       |       |       METADATA
|       |       |       RECORD
|       |       |       WHEEL
|       |       |       
|       |       \---__pycache__
|       |               typing_extensions.cpython-312.pyc
|       |               
|       \---Scripts
|               activate
|               activate.bat
|               Activate.ps1
|               deactivate.bat
|               flask.exe
|               pip.exe
|               pip3.12.exe
|               pip3.exe
|               python.exe
|               pythonw.exe
|               
\---frontend
    |   index.html
    |   package-lock.json
    |   package.json
    |   README.md
    |   vite.config.js
    |   
    +---node_modules
    |   |   .package-lock.json
    |   |   
    |   +---.bin
    |   |       baseline-browser-mapping
    |   |       baseline-browser-mapping.cmd
    |   |       baseline-browser-mapping.ps1
    |   |       browserslist
    |   |       browserslist.cmd
    |   |       browserslist.ps1
    |   |       esbuild
    |   |       esbuild.cmd
    |   |       esbuild.ps1
    |   |       jsesc
    |   |       jsesc.cmd
    |   |       jsesc.ps1
    |   |       json5
    |   |       json5.cmd
    |   |       json5.ps1
    |   |       loose-envify
    |   |       loose-envify.cmd
    |   |       loose-envify.ps1
    |   |       nanoid
    |   |       nanoid.cmd
    |   |       nanoid.ps1
    |   |       parser
    |   |       parser.cmd
    |   |       parser.ps1
    |   |       rollup
    |   |       rollup.cmd
    |   |       rollup.ps1
    |   |       semver
    |   |       semver.cmd
    |   |       semver.ps1
    |   |       update-browserslist-db
    |   |       update-browserslist-db.cmd
    |   |       update-browserslist-db.ps1
    |   |       vite
    |   |       vite.cmd
    |   |       vite.ps1
    |   |       
    |   +---.vite
    |   |   \---deps
    |   |           axios.js
    |   |           axios.js.map
    |   |           chunk-DRWLMN53.js
    |   |           chunk-DRWLMN53.js.map
    |   |           chunk-G3PMV62Z.js
    |   |           chunk-G3PMV62Z.js.map
    |   |           chunk-PJEEZAML.js
    |   |           chunk-PJEEZAML.js.map
    |   |           package.json
    |   |           react-dom.js
    |   |           react-dom.js.map
    |   |           react-dom_client.js
    |   |           react-dom_client.js.map
    |   |           react-router-dom.js
    |   |           react-router-dom.js.map
    |   |           react.js
    |   |           react.js.map
    |   |           react_jsx-dev-runtime.js
    |   |           react_jsx-dev-runtime.js.map
    |   |           react_jsx-runtime.js
    |   |           react_jsx-runtime.js.map
    |   |           _metadata.json
    |   |           
    |   +---@babel
    |   |   +---code-frame
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           
    |   |   +---compat-data
    |   |   |   |   corejs2-built-ins.js
    |   |   |   |   corejs3-shipped-proposals.js
    |   |   |   |   LICENSE
    |   |   |   |   native-modules.js
    |   |   |   |   overlapping-plugins.js
    |   |   |   |   package.json
    |   |   |   |   plugin-bugfixes.js
    |   |   |   |   plugins.js
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---data
    |   |   |           corejs2-built-ins.json
    |   |   |           corejs3-shipped-proposals.json
    |   |   |           native-modules.json
    |   |   |           overlapping-plugins.json
    |   |   |           plugin-bugfixes.json
    |   |   |           plugins.json
    |   |   |           
    |   |   +---core
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   +---lib
    |   |   |   |   |   index.js
    |   |   |   |   |   index.js.map
    |   |   |   |   |   parse.js
    |   |   |   |   |   parse.js.map
    |   |   |   |   |   transform-ast.js
    |   |   |   |   |   transform-ast.js.map
    |   |   |   |   |   transform-file-browser.js
    |   |   |   |   |   transform-file-browser.js.map
    |   |   |   |   |   transform-file.js
    |   |   |   |   |   transform-file.js.map
    |   |   |   |   |   transform.js
    |   |   |   |   |   transform.js.map
    |   |   |   |   |   
    |   |   |   |   +---config
    |   |   |   |   |   |   cache-contexts.js
    |   |   |   |   |   |   cache-contexts.js.map
    |   |   |   |   |   |   caching.js
    |   |   |   |   |   |   caching.js.map
    |   |   |   |   |   |   config-chain.js
    |   |   |   |   |   |   config-chain.js.map
    |   |   |   |   |   |   config-descriptors.js
    |   |   |   |   |   |   config-descriptors.js.map
    |   |   |   |   |   |   full.js
    |   |   |   |   |   |   full.js.map
    |   |   |   |   |   |   index.js
    |   |   |   |   |   |   index.js.map
    |   |   |   |   |   |   item.js
    |   |   |   |   |   |   item.js.map
    |   |   |   |   |   |   partial.js
    |   |   |   |   |   |   partial.js.map
    |   |   |   |   |   |   pattern-to-regex.js
    |   |   |   |   |   |   pattern-to-regex.js.map
    |   |   |   |   |   |   plugin.js
    |   |   |   |   |   |   plugin.js.map
    |   |   |   |   |   |   printer.js
    |   |   |   |   |   |   printer.js.map
    |   |   |   |   |   |   resolve-targets-browser.js
    |   |   |   |   |   |   resolve-targets-browser.js.map
    |   |   |   |   |   |   resolve-targets.js
    |   |   |   |   |   |   resolve-targets.js.map
    |   |   |   |   |   |   util.js
    |   |   |   |   |   |   util.js.map
    |   |   |   |   |   |   
    |   |   |   |   |   +---files
    |   |   |   |   |   |       configuration.js
    |   |   |   |   |   |       configuration.js.map
    |   |   |   |   |   |       import.cjs
    |   |   |   |   |   |       import.cjs.map
    |   |   |   |   |   |       index-browser.js
    |   |   |   |   |   |       index-browser.js.map
    |   |   |   |   |   |       index.js
    |   |   |   |   |   |       index.js.map
    |   |   |   |   |   |       module-types.js
    |   |   |   |   |   |       module-types.js.map
    |   |   |   |   |   |       package.js
    |   |   |   |   |   |       package.js.map
    |   |   |   |   |   |       plugins.js
    |   |   |   |   |   |       plugins.js.map
    |   |   |   |   |   |       types.js
    |   |   |   |   |   |       types.js.map
    |   |   |   |   |   |       utils.js
    |   |   |   |   |   |       utils.js.map
    |   |   |   |   |   |       
    |   |   |   |   |   +---helpers
    |   |   |   |   |   |       config-api.js
    |   |   |   |   |   |       config-api.js.map
    |   |   |   |   |   |       deep-array.js
    |   |   |   |   |   |       deep-array.js.map
    |   |   |   |   |   |       environment.js
    |   |   |   |   |   |       environment.js.map
    |   |   |   |   |   |       
    |   |   |   |   |   \---validation
    |   |   |   |   |           option-assertions.js
    |   |   |   |   |           option-assertions.js.map
    |   |   |   |   |           options.js
    |   |   |   |   |           options.js.map
    |   |   |   |   |           plugins.js
    |   |   |   |   |           plugins.js.map
    |   |   |   |   |           removed.js
    |   |   |   |   |           removed.js.map
    |   |   |   |   |           
    |   |   |   |   +---errors
    |   |   |   |   |       config-error.js
    |   |   |   |   |       config-error.js.map
    |   |   |   |   |       rewrite-stack-trace.js
    |   |   |   |   |       rewrite-stack-trace.js.map
    |   |   |   |   |       
    |   |   |   |   +---gensync-utils
    |   |   |   |   |       async.js
    |   |   |   |   |       async.js.map
    |   |   |   |   |       fs.js
    |   |   |   |   |       fs.js.map
    |   |   |   |   |       functional.js
    |   |   |   |   |       functional.js.map
    |   |   |   |   |       
    |   |   |   |   +---parser
    |   |   |   |   |   |   index.js
    |   |   |   |   |   |   index.js.map
    |   |   |   |   |   |   
    |   |   |   |   |   \---util
    |   |   |   |   |           missing-plugin-helper.js
    |   |   |   |   |           missing-plugin-helper.js.map
    |   |   |   |   |           
    |   |   |   |   +---tools
    |   |   |   |   |       build-external-helpers.js
    |   |   |   |   |       build-external-helpers.js.map
    |   |   |   |   |       
    |   |   |   |   +---transformation
    |   |   |   |   |   |   block-hoist-plugin.js
    |   |   |   |   |   |   block-hoist-plugin.js.map
    |   |   |   |   |   |   index.js
    |   |   |   |   |   |   index.js.map
    |   |   |   |   |   |   normalize-file.js
    |   |   |   |   |   |   normalize-file.js.map
    |   |   |   |   |   |   normalize-opts.js
    |   |   |   |   |   |   normalize-opts.js.map
    |   |   |   |   |   |   plugin-pass.js
    |   |   |   |   |   |   plugin-pass.js.map
    |   |   |   |   |   |   
    |   |   |   |   |   +---file
    |   |   |   |   |   |       babel-7-helpers.cjs
    |   |   |   |   |   |       babel-7-helpers.cjs.map
    |   |   |   |   |   |       file.js
    |   |   |   |   |   |       file.js.map
    |   |   |   |   |   |       generate.js
    |   |   |   |   |   |       generate.js.map
    |   |   |   |   |   |       merge-map.js
    |   |   |   |   |   |       merge-map.js.map
    |   |   |   |   |   |       
    |   |   |   |   |   \---util
    |   |   |   |   |           clone-deep.js
    |   |   |   |   |           clone-deep.js.map
    |   |   |   |   |           
    |   |   |   |   \---vendor
    |   |   |   |           import-meta-resolve.js
    |   |   |   |           import-meta-resolve.js.map
    |   |   |   |           
    |   |   |   \---src
    |   |   |       |   transform-file-browser.ts
    |   |   |       |   transform-file.ts
    |   |   |       |   
    |   |   |       \---config
    |   |   |           |   resolve-targets-browser.ts
    |   |   |           |   resolve-targets.ts
    |   |   |           |   
    |   |   |           \---files
    |   |   |                   index-browser.ts
    |   |   |                   index.ts
    |   |   |                   
    |   |   +---generator
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |       |   buffer.js
    |   |   |       |   buffer.js.map
    |   |   |       |   index.js
    |   |   |       |   index.js.map
    |   |   |       |   printer.js
    |   |   |       |   printer.js.map
    |   |   |       |   source-map.js
    |   |   |       |   source-map.js.map
    |   |   |       |   token-map.js
    |   |   |       |   token-map.js.map
    |   |   |       |   
    |   |   |       +---generators
    |   |   |       |       base.js
    |   |   |       |       base.js.map
    |   |   |       |       classes.js
    |   |   |       |       classes.js.map
    |   |   |       |       deprecated.js
    |   |   |       |       deprecated.js.map
    |   |   |       |       expressions.js
    |   |   |       |       expressions.js.map
    |   |   |       |       flow.js
    |   |   |       |       flow.js.map
    |   |   |       |       index.js
    |   |   |       |       index.js.map
    |   |   |       |       jsx.js
    |   |   |       |       jsx.js.map
    |   |   |       |       methods.js
    |   |   |       |       methods.js.map
    |   |   |       |       modules.js
    |   |   |       |       modules.js.map
    |   |   |       |       statements.js
    |   |   |       |       statements.js.map
    |   |   |       |       template-literals.js
    |   |   |       |       template-literals.js.map
    |   |   |       |       types.js
    |   |   |       |       types.js.map
    |   |   |       |       typescript.js
    |   |   |       |       typescript.js.map
    |   |   |       |       
    |   |   |       \---node
    |   |   |               index.js
    |   |   |               index.js.map
    |   |   |               parentheses.js
    |   |   |               parentheses.js.map
    |   |   |               whitespace.js
    |   |   |               whitespace.js.map
    |   |   |               
    |   |   +---helper-compilation-targets
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           debug.js
    |   |   |           debug.js.map
    |   |   |           filter-items.js
    |   |   |           filter-items.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           options.js
    |   |   |           options.js.map
    |   |   |           pretty.js
    |   |   |           pretty.js.map
    |   |   |           targets.js
    |   |   |           targets.js.map
    |   |   |           utils.js
    |   |   |           utils.js.map
    |   |   |           
    |   |   +---helper-globals
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---data
    |   |   |           browser-upper.json
    |   |   |           builtin-lower.json
    |   |   |           builtin-upper.json
    |   |   |           
    |   |   +---helper-module-imports
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           import-builder.js
    |   |   |           import-builder.js.map
    |   |   |           import-injector.js
    |   |   |           import-injector.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           is-module.js
    |   |   |           is-module.js.map
    |   |   |           
    |   |   +---helper-module-transforms
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           dynamic-import.js
    |   |   |           dynamic-import.js.map
    |   |   |           get-module-name.js
    |   |   |           get-module-name.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           lazy-modules.js
    |   |   |           lazy-modules.js.map
    |   |   |           normalize-and-load-metadata.js
    |   |   |           normalize-and-load-metadata.js.map
    |   |   |           rewrite-live-references.js
    |   |   |           rewrite-live-references.js.map
    |   |   |           rewrite-this.js
    |   |   |           rewrite-this.js.map
    |   |   |           
    |   |   +---helper-plugin-utils
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           
    |   |   +---helper-string-parser
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           
    |   |   +---helper-validator-identifier
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           identifier.js
    |   |   |           identifier.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           keyword.js
    |   |   |           keyword.js.map
    |   |   |           
    |   |   +---helper-validator-option
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           find-suggestion.js
    |   |   |           find-suggestion.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           validator.js
    |   |   |           validator.js.map
    |   |   |           
    |   |   +---helpers
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |       |   helpers-generated.js
    |   |   |       |   helpers-generated.js.map
    |   |   |       |   index.js
    |   |   |       |   index.js.map
    |   |   |       |   
    |   |   |       \---helpers
    |   |   |               applyDecoratedDescriptor.js
    |   |   |               applyDecoratedDescriptor.js.map
    |   |   |               applyDecs.js
    |   |   |               applyDecs.js.map
    |   |   |               applyDecs2203.js
    |   |   |               applyDecs2203.js.map
    |   |   |               applyDecs2203R.js
    |   |   |               applyDecs2203R.js.map
    |   |   |               applyDecs2301.js
    |   |   |               applyDecs2301.js.map
    |   |   |               applyDecs2305.js
    |   |   |               applyDecs2305.js.map
    |   |   |               applyDecs2311.js
    |   |   |               applyDecs2311.js.map
    |   |   |               arrayLikeToArray.js
    |   |   |               arrayLikeToArray.js.map
    |   |   |               arrayWithHoles.js
    |   |   |               arrayWithHoles.js.map
    |   |   |               arrayWithoutHoles.js
    |   |   |               arrayWithoutHoles.js.map
    |   |   |               assertClassBrand.js
    |   |   |               assertClassBrand.js.map
    |   |   |               assertThisInitialized.js
    |   |   |               assertThisInitialized.js.map
    |   |   |               asyncGeneratorDelegate.js
    |   |   |               asyncGeneratorDelegate.js.map
    |   |   |               asyncIterator.js
    |   |   |               asyncIterator.js.map
    |   |   |               asyncToGenerator.js
    |   |   |               asyncToGenerator.js.map
    |   |   |               awaitAsyncGenerator.js
    |   |   |               awaitAsyncGenerator.js.map
    |   |   |               AwaitValue.js
    |   |   |               AwaitValue.js.map
    |   |   |               callSuper.js
    |   |   |               callSuper.js.map
    |   |   |               checkInRHS.js
    |   |   |               checkInRHS.js.map
    |   |   |               checkPrivateRedeclaration.js
    |   |   |               checkPrivateRedeclaration.js.map
    |   |   |               classApplyDescriptorDestructureSet.js
    |   |   |               classApplyDescriptorDestructureSet.js.map
    |   |   |               classApplyDescriptorGet.js
    |   |   |               classApplyDescriptorGet.js.map
    |   |   |               classApplyDescriptorSet.js
    |   |   |               classApplyDescriptorSet.js.map
    |   |   |               classCallCheck.js
    |   |   |               classCallCheck.js.map
    |   |   |               classCheckPrivateStaticAccess.js
    |   |   |               classCheckPrivateStaticAccess.js.map
    |   |   |               classCheckPrivateStaticFieldDescriptor.js
    |   |   |               classCheckPrivateStaticFieldDescriptor.js.map
    |   |   |               classExtractFieldDescriptor.js
    |   |   |               classExtractFieldDescriptor.js.map
    |   |   |               classNameTDZError.js
    |   |   |               classNameTDZError.js.map
    |   |   |               classPrivateFieldDestructureSet.js
    |   |   |               classPrivateFieldDestructureSet.js.map
    |   |   |               classPrivateFieldGet.js
    |   |   |               classPrivateFieldGet.js.map
    |   |   |               classPrivateFieldGet2.js
    |   |   |               classPrivateFieldGet2.js.map
    |   |   |               classPrivateFieldInitSpec.js
    |   |   |               classPrivateFieldInitSpec.js.map
    |   |   |               classPrivateFieldLooseBase.js
    |   |   |               classPrivateFieldLooseBase.js.map
    |   |   |               classPrivateFieldLooseKey.js
    |   |   |               classPrivateFieldLooseKey.js.map
    |   |   |               classPrivateFieldSet.js
    |   |   |               classPrivateFieldSet.js.map
    |   |   |               classPrivateFieldSet2.js
    |   |   |               classPrivateFieldSet2.js.map
    |   |   |               classPrivateGetter.js
    |   |   |               classPrivateGetter.js.map
    |   |   |               classPrivateMethodGet.js
    |   |   |               classPrivateMethodGet.js.map
    |   |   |               classPrivateMethodInitSpec.js
    |   |   |               classPrivateMethodInitSpec.js.map
    |   |   |               classPrivateMethodSet.js
    |   |   |               classPrivateMethodSet.js.map
    |   |   |               classPrivateSetter.js
    |   |   |               classPrivateSetter.js.map
    |   |   |               classStaticPrivateFieldDestructureSet.js
    |   |   |               classStaticPrivateFieldDestructureSet.js.map
    |   |   |               classStaticPrivateFieldSpecGet.js
    |   |   |               classStaticPrivateFieldSpecGet.js.map
    |   |   |               classStaticPrivateFieldSpecSet.js
    |   |   |               classStaticPrivateFieldSpecSet.js.map
    |   |   |               classStaticPrivateMethodGet.js
    |   |   |               classStaticPrivateMethodGet.js.map
    |   |   |               classStaticPrivateMethodSet.js
    |   |   |               classStaticPrivateMethodSet.js.map
    |   |   |               construct.js
    |   |   |               construct.js.map
    |   |   |               createClass.js
    |   |   |               createClass.js.map
    |   |   |               createForOfIteratorHelper.js
    |   |   |               createForOfIteratorHelper.js.map
    |   |   |               createForOfIteratorHelperLoose.js
    |   |   |               createForOfIteratorHelperLoose.js.map
    |   |   |               createSuper.js
    |   |   |               createSuper.js.map
    |   |   |               decorate.js
    |   |   |               decorate.js.map
    |   |   |               defaults.js
    |   |   |               defaults.js.map
    |   |   |               defineAccessor.js
    |   |   |               defineAccessor.js.map
    |   |   |               defineEnumerableProperties.js
    |   |   |               defineEnumerableProperties.js.map
    |   |   |               defineProperty.js
    |   |   |               defineProperty.js.map
    |   |   |               dispose.js
    |   |   |               dispose.js.map
    |   |   |               extends.js
    |   |   |               extends.js.map
    |   |   |               get.js
    |   |   |               get.js.map
    |   |   |               getPrototypeOf.js
    |   |   |               getPrototypeOf.js.map
    |   |   |               identity.js
    |   |   |               identity.js.map
    |   |   |               importDeferProxy.js
    |   |   |               importDeferProxy.js.map
    |   |   |               inherits.js
    |   |   |               inherits.js.map
    |   |   |               inheritsLoose.js
    |   |   |               inheritsLoose.js.map
    |   |   |               initializerDefineProperty.js
    |   |   |               initializerDefineProperty.js.map
    |   |   |               initializerWarningHelper.js
    |   |   |               initializerWarningHelper.js.map
    |   |   |               instanceof.js
    |   |   |               instanceof.js.map
    |   |   |               interopRequireDefault.js
    |   |   |               interopRequireDefault.js.map
    |   |   |               interopRequireWildcard.js
    |   |   |               interopRequireWildcard.js.map
    |   |   |               isNativeFunction.js
    |   |   |               isNativeFunction.js.map
    |   |   |               isNativeReflectConstruct.js
    |   |   |               isNativeReflectConstruct.js.map
    |   |   |               iterableToArray.js
    |   |   |               iterableToArray.js.map
    |   |   |               iterableToArrayLimit.js
    |   |   |               iterableToArrayLimit.js.map
    |   |   |               jsx.js
    |   |   |               jsx.js.map
    |   |   |               maybeArrayLike.js
    |   |   |               maybeArrayLike.js.map
    |   |   |               newArrowCheck.js
    |   |   |               newArrowCheck.js.map
    |   |   |               nonIterableRest.js
    |   |   |               nonIterableRest.js.map
    |   |   |               nonIterableSpread.js
    |   |   |               nonIterableSpread.js.map
    |   |   |               nullishReceiverError.js
    |   |   |               nullishReceiverError.js.map
    |   |   |               objectDestructuringEmpty.js
    |   |   |               objectDestructuringEmpty.js.map
    |   |   |               objectSpread.js
    |   |   |               objectSpread.js.map
    |   |   |               objectSpread2.js
    |   |   |               objectSpread2.js.map
    |   |   |               objectWithoutProperties.js
    |   |   |               objectWithoutProperties.js.map
    |   |   |               objectWithoutPropertiesLoose.js
    |   |   |               objectWithoutPropertiesLoose.js.map
    |   |   |               OverloadYield.js
    |   |   |               OverloadYield.js.map
    |   |   |               possibleConstructorReturn.js
    |   |   |               possibleConstructorReturn.js.map
    |   |   |               readOnlyError.js
    |   |   |               readOnlyError.js.map
    |   |   |               regenerator.js
    |   |   |               regenerator.js.map
    |   |   |               regeneratorAsync.js
    |   |   |               regeneratorAsync.js.map
    |   |   |               regeneratorAsyncGen.js
    |   |   |               regeneratorAsyncGen.js.map
    |   |   |               regeneratorAsyncIterator.js
    |   |   |               regeneratorAsyncIterator.js.map
    |   |   |               regeneratorDefine.js
    |   |   |               regeneratorDefine.js.map
    |   |   |               regeneratorKeys.js
    |   |   |               regeneratorKeys.js.map
    |   |   |               regeneratorRuntime.js
    |   |   |               regeneratorRuntime.js.map
    |   |   |               regeneratorValues.js
    |   |   |               regeneratorValues.js.map
    |   |   |               set.js
    |   |   |               set.js.map
    |   |   |               setFunctionName.js
    |   |   |               setFunctionName.js.map
    |   |   |               setPrototypeOf.js
    |   |   |               setPrototypeOf.js.map
    |   |   |               skipFirstGeneratorNext.js
    |   |   |               skipFirstGeneratorNext.js.map
    |   |   |               slicedToArray.js
    |   |   |               slicedToArray.js.map
    |   |   |               superPropBase.js
    |   |   |               superPropBase.js.map
    |   |   |               superPropGet.js
    |   |   |               superPropGet.js.map
    |   |   |               superPropSet.js
    |   |   |               superPropSet.js.map
    |   |   |               taggedTemplateLiteral.js
    |   |   |               taggedTemplateLiteral.js.map
    |   |   |               taggedTemplateLiteralLoose.js
    |   |   |               taggedTemplateLiteralLoose.js.map
    |   |   |               tdz.js
    |   |   |               tdz.js.map
    |   |   |               temporalRef.js
    |   |   |               temporalRef.js.map
    |   |   |               temporalUndefined.js
    |   |   |               temporalUndefined.js.map
    |   |   |               toArray.js
    |   |   |               toArray.js.map
    |   |   |               toConsumableArray.js
    |   |   |               toConsumableArray.js.map
    |   |   |               toPrimitive.js
    |   |   |               toPrimitive.js.map
    |   |   |               toPropertyKey.js
    |   |   |               toPropertyKey.js.map
    |   |   |               toSetter.js
    |   |   |               toSetter.js.map
    |   |   |               tsRewriteRelativeImportExtensions.js
    |   |   |               tsRewriteRelativeImportExtensions.js.map
    |   |   |               typeof.js
    |   |   |               typeof.js.map
    |   |   |               unsupportedIterableToArray.js
    |   |   |               unsupportedIterableToArray.js.map
    |   |   |               using.js
    |   |   |               using.js.map
    |   |   |               usingCtx.js
    |   |   |               usingCtx.js.map
    |   |   |               wrapAsyncGenerator.js
    |   |   |               wrapAsyncGenerator.js.map
    |   |   |               wrapNativeSuper.js
    |   |   |               wrapNativeSuper.js.map
    |   |   |               wrapRegExp.js
    |   |   |               wrapRegExp.js.map
    |   |   |               writeOnlyError.js
    |   |   |               writeOnlyError.js.map
    |   |   |               
    |   |   +---parser
    |   |   |   |   CHANGELOG.md
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   +---bin
    |   |   |   |       babel-parser.js
    |   |   |   |       
    |   |   |   +---lib
    |   |   |   |       index.js
    |   |   |   |       index.js.map
    |   |   |   |       
    |   |   |   \---typings
    |   |   |           babel-parser.d.ts
    |   |   |           
    |   |   +---plugin-transform-react-jsx-self
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           
    |   |   +---plugin-transform-react-jsx-source
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           
    |   |   +---template
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           builder.js
    |   |   |           builder.js.map
    |   |   |           formatters.js
    |   |   |           formatters.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           literal.js
    |   |   |           literal.js.map
    |   |   |           options.js
    |   |   |           options.js.map
    |   |   |           parse.js
    |   |   |           parse.js.map
    |   |   |           populate.js
    |   |   |           populate.js.map
    |   |   |           string.js
    |   |   |           string.js.map
    |   |   |           
    |   |   +---traverse
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |       |   cache.js
    |   |   |       |   cache.js.map
    |   |   |       |   context.js
    |   |   |       |   context.js.map
    |   |   |       |   hub.js
    |   |   |       |   hub.js.map
    |   |   |       |   index.js
    |   |   |       |   index.js.map
    |   |   |       |   traverse-node.js
    |   |   |       |   traverse-node.js.map
    |   |   |       |   types.js
    |   |   |       |   types.js.map
    |   |   |       |   visitors.js
    |   |   |       |   visitors.js.map
    |   |   |       |   
    |   |   |       +---path
    |   |   |       |   |   ancestry.js
    |   |   |       |   |   ancestry.js.map
    |   |   |       |   |   comments.js
    |   |   |       |   |   comments.js.map
    |   |   |       |   |   context.js
    |   |   |       |   |   context.js.map
    |   |   |       |   |   conversion.js
    |   |   |       |   |   conversion.js.map
    |   |   |       |   |   evaluation.js
    |   |   |       |   |   evaluation.js.map
    |   |   |       |   |   family.js
    |   |   |       |   |   family.js.map
    |   |   |       |   |   index.js
    |   |   |       |   |   index.js.map
    |   |   |       |   |   introspection.js
    |   |   |       |   |   introspection.js.map
    |   |   |       |   |   modification.js
    |   |   |       |   |   modification.js.map
    |   |   |       |   |   removal.js
    |   |   |       |   |   removal.js.map
    |   |   |       |   |   replacement.js
    |   |   |       |   |   replacement.js.map
    |   |   |       |   |   
    |   |   |       |   +---inference
    |   |   |       |   |       index.js
    |   |   |       |   |       index.js.map
    |   |   |       |   |       inferer-reference.js
    |   |   |       |   |       inferer-reference.js.map
    |   |   |       |   |       inferers.js
    |   |   |       |   |       inferers.js.map
    |   |   |       |   |       util.js
    |   |   |       |   |       util.js.map
    |   |   |       |   |       
    |   |   |       |   \---lib
    |   |   |       |           hoister.js
    |   |   |       |           hoister.js.map
    |   |   |       |           removal-hooks.js
    |   |   |       |           removal-hooks.js.map
    |   |   |       |           virtual-types-validator.js
    |   |   |       |           virtual-types-validator.js.map
    |   |   |       |           virtual-types.js
    |   |   |       |           virtual-types.js.map
    |   |   |       |           
    |   |   |       \---scope
    |   |   |           |   binding.js
    |   |   |           |   binding.js.map
    |   |   |           |   index.js
    |   |   |           |   index.js.map
    |   |   |           |   
    |   |   |           \---lib
    |   |   |                   renamer.js
    |   |   |                   renamer.js.map
    |   |   |                   
    |   |   \---types
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   README.md
    |   |       |   
    |   |       \---lib
    |   |           |   index-legacy.d.ts
    |   |           |   index.d.ts
    |   |           |   index.js
    |   |           |   index.js.flow
    |   |           |   index.js.map
    |   |           |   
    |   |           +---asserts
    |   |           |   |   assertNode.js
    |   |           |   |   assertNode.js.map
    |   |           |   |   
    |   |           |   \---generated
    |   |           |           index.js
    |   |           |           index.js.map
    |   |           |           
    |   |           +---ast-types
    |   |           |   \---generated
    |   |           |           index.js
    |   |           |           index.js.map
    |   |           |           
    |   |           +---builders
    |   |           |   |   productions.js
    |   |           |   |   productions.js.map
    |   |           |   |   validateNode.js
    |   |           |   |   validateNode.js.map
    |   |           |   |   
    |   |           |   +---flow
    |   |           |   |       createFlowUnionType.js
    |   |           |   |       createFlowUnionType.js.map
    |   |           |   |       createTypeAnnotationBasedOnTypeof.js
    |   |           |   |       createTypeAnnotationBasedOnTypeof.js.map
    |   |           |   |       
    |   |           |   +---generated
    |   |           |   |       index.js
    |   |           |   |       index.js.map
    |   |           |   |       lowercase.js
    |   |           |   |       lowercase.js.map
    |   |           |   |       uppercase.js
    |   |           |   |       uppercase.js.map
    |   |           |   |       
    |   |           |   +---react
    |   |           |   |       buildChildren.js
    |   |           |   |       buildChildren.js.map
    |   |           |   |       
    |   |           |   \---typescript
    |   |           |           createTSUnionType.js
    |   |           |           createTSUnionType.js.map
    |   |           |           
    |   |           +---clone
    |   |           |       clone.js
    |   |           |       clone.js.map
    |   |           |       cloneDeep.js
    |   |           |       cloneDeep.js.map
    |   |           |       cloneDeepWithoutLoc.js
    |   |           |       cloneDeepWithoutLoc.js.map
    |   |           |       cloneNode.js
    |   |           |       cloneNode.js.map
    |   |           |       cloneWithoutLoc.js
    |   |           |       cloneWithoutLoc.js.map
    |   |           |       
    |   |           +---comments
    |   |           |       addComment.js
    |   |           |       addComment.js.map
    |   |           |       addComments.js
    |   |           |       addComments.js.map
    |   |           |       inheritInnerComments.js
    |   |           |       inheritInnerComments.js.map
    |   |           |       inheritLeadingComments.js
    |   |           |       inheritLeadingComments.js.map
    |   |           |       inheritsComments.js
    |   |           |       inheritsComments.js.map
    |   |           |       inheritTrailingComments.js
    |   |           |       inheritTrailingComments.js.map
    |   |           |       removeComments.js
    |   |           |       removeComments.js.map
    |   |           |       
    |   |           +---constants
    |   |           |   |   index.js
    |   |           |   |   index.js.map
    |   |           |   |   
    |   |           |   \---generated
    |   |           |           index.js
    |   |           |           index.js.map
    |   |           |           
    |   |           +---converters
    |   |           |       ensureBlock.js
    |   |           |       ensureBlock.js.map
    |   |           |       gatherSequenceExpressions.js
    |   |           |       gatherSequenceExpressions.js.map
    |   |           |       toBindingIdentifierName.js
    |   |           |       toBindingIdentifierName.js.map
    |   |           |       toBlock.js
    |   |           |       toBlock.js.map
    |   |           |       toComputedKey.js
    |   |           |       toComputedKey.js.map
    |   |           |       toExpression.js
    |   |           |       toExpression.js.map
    |   |           |       toIdentifier.js
    |   |           |       toIdentifier.js.map
    |   |           |       toKeyAlias.js
    |   |           |       toKeyAlias.js.map
    |   |           |       toSequenceExpression.js
    |   |           |       toSequenceExpression.js.map
    |   |           |       toStatement.js
    |   |           |       toStatement.js.map
    |   |           |       valueToNode.js
    |   |           |       valueToNode.js.map
    |   |           |       
    |   |           +---definitions
    |   |           |       core.js
    |   |           |       core.js.map
    |   |           |       deprecated-aliases.js
    |   |           |       deprecated-aliases.js.map
    |   |           |       experimental.js
    |   |           |       experimental.js.map
    |   |           |       flow.js
    |   |           |       flow.js.map
    |   |           |       index.js
    |   |           |       index.js.map
    |   |           |       jsx.js
    |   |           |       jsx.js.map
    |   |           |       misc.js
    |   |           |       misc.js.map
    |   |           |       placeholders.js
    |   |           |       placeholders.js.map
    |   |           |       typescript.js
    |   |           |       typescript.js.map
    |   |           |       utils.js
    |   |           |       utils.js.map
    |   |           |       
    |   |           +---modifications
    |   |           |   |   appendToMemberExpression.js
    |   |           |   |   appendToMemberExpression.js.map
    |   |           |   |   inherits.js
    |   |           |   |   inherits.js.map
    |   |           |   |   prependToMemberExpression.js
    |   |           |   |   prependToMemberExpression.js.map
    |   |           |   |   removeProperties.js
    |   |           |   |   removeProperties.js.map
    |   |           |   |   removePropertiesDeep.js
    |   |           |   |   removePropertiesDeep.js.map
    |   |           |   |   
    |   |           |   +---flow
    |   |           |   |       removeTypeDuplicates.js
    |   |           |   |       removeTypeDuplicates.js.map
    |   |           |   |       
    |   |           |   \---typescript
    |   |           |           removeTypeDuplicates.js
    |   |           |           removeTypeDuplicates.js.map
    |   |           |           
    |   |           +---retrievers
    |   |           |       getAssignmentIdentifiers.js
    |   |           |       getAssignmentIdentifiers.js.map
    |   |           |       getBindingIdentifiers.js
    |   |           |       getBindingIdentifiers.js.map
    |   |           |       getFunctionName.js
    |   |           |       getFunctionName.js.map
    |   |           |       getOuterBindingIdentifiers.js
    |   |           |       getOuterBindingIdentifiers.js.map
    |   |           |       
    |   |           +---traverse
    |   |           |       traverse.js
    |   |           |       traverse.js.map
    |   |           |       traverseFast.js
    |   |           |       traverseFast.js.map
    |   |           |       
    |   |           +---utils
    |   |           |   |   deprecationWarning.js
    |   |           |   |   deprecationWarning.js.map
    |   |           |   |   inherit.js
    |   |           |   |   inherit.js.map
    |   |           |   |   shallowEqual.js
    |   |           |   |   shallowEqual.js.map
    |   |           |   |   
    |   |           |   \---react
    |   |           |           cleanJSXElementLiteralChild.js
    |   |           |           cleanJSXElementLiteralChild.js.map
    |   |           |           
    |   |           \---validators
    |   |               |   buildMatchMemberExpression.js
    |   |               |   buildMatchMemberExpression.js.map
    |   |               |   is.js
    |   |               |   is.js.map
    |   |               |   isBinding.js
    |   |               |   isBinding.js.map
    |   |               |   isBlockScoped.js
    |   |               |   isBlockScoped.js.map
    |   |               |   isImmutable.js
    |   |               |   isImmutable.js.map
    |   |               |   isLet.js
    |   |               |   isLet.js.map
    |   |               |   isNode.js
    |   |               |   isNode.js.map
    |   |               |   isNodesEquivalent.js
    |   |               |   isNodesEquivalent.js.map
    |   |               |   isPlaceholderType.js
    |   |               |   isPlaceholderType.js.map
    |   |               |   isReferenced.js
    |   |               |   isReferenced.js.map
    |   |               |   isScope.js
    |   |               |   isScope.js.map
    |   |               |   isSpecifierDefault.js
    |   |               |   isSpecifierDefault.js.map
    |   |               |   isType.js
    |   |               |   isType.js.map
    |   |               |   isValidES3Identifier.js
    |   |               |   isValidES3Identifier.js.map
    |   |               |   isValidIdentifier.js
    |   |               |   isValidIdentifier.js.map
    |   |               |   isVar.js
    |   |               |   isVar.js.map
    |   |               |   matchesPattern.js
    |   |               |   matchesPattern.js.map
    |   |               |   validate.js
    |   |               |   validate.js.map
    |   |               |   
    |   |               +---generated
    |   |               |       index.js
    |   |               |       index.js.map
    |   |               |       
    |   |               \---react
    |   |                       isCompatTag.js
    |   |                       isCompatTag.js.map
    |   |                       isReactComponent.js
    |   |                       isReactComponent.js.map
    |   |                       
    |   +---@esbuild
    |   |   \---win32-x64
    |   |           esbuild.exe
    |   |           package.json
    |   |           README.md
    |   |           
    |   +---@jridgewell
    |   |   +---gen-mapping
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   +---dist
    |   |   |   |   |   gen-mapping.mjs
    |   |   |   |   |   gen-mapping.mjs.map
    |   |   |   |   |   gen-mapping.umd.js
    |   |   |   |   |   gen-mapping.umd.js.map
    |   |   |   |   |   
    |   |   |   |   \---types
    |   |   |   |           gen-mapping.d.ts
    |   |   |   |           set-array.d.ts
    |   |   |   |           sourcemap-segment.d.ts
    |   |   |   |           types.d.ts
    |   |   |   |           
    |   |   |   +---src
    |   |   |   |       gen-mapping.ts
    |   |   |   |       set-array.ts
    |   |   |   |       sourcemap-segment.ts
    |   |   |   |       types.ts
    |   |   |   |       
    |   |   |   \---types
    |   |   |           gen-mapping.d.cts
    |   |   |           gen-mapping.d.cts.map
    |   |   |           gen-mapping.d.mts
    |   |   |           gen-mapping.d.mts.map
    |   |   |           set-array.d.cts
    |   |   |           set-array.d.cts.map
    |   |   |           set-array.d.mts
    |   |   |           set-array.d.mts.map
    |   |   |           sourcemap-segment.d.cts
    |   |   |           sourcemap-segment.d.cts.map
    |   |   |           sourcemap-segment.d.mts
    |   |   |           sourcemap-segment.d.mts.map
    |   |   |           types.d.cts
    |   |   |           types.d.cts.map
    |   |   |           types.d.mts
    |   |   |           types.d.mts.map
    |   |   |           
    |   |   +---remapping
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   +---dist
    |   |   |   |       remapping.mjs
    |   |   |   |       remapping.mjs.map
    |   |   |   |       remapping.umd.js
    |   |   |   |       remapping.umd.js.map
    |   |   |   |       
    |   |   |   +---src
    |   |   |   |       build-source-map-tree.ts
    |   |   |   |       remapping.ts
    |   |   |   |       source-map-tree.ts
    |   |   |   |       source-map.ts
    |   |   |   |       types.ts
    |   |   |   |       
    |   |   |   \---types
    |   |   |           build-source-map-tree.d.cts
    |   |   |           build-source-map-tree.d.cts.map
    |   |   |           build-source-map-tree.d.mts
    |   |   |           build-source-map-tree.d.mts.map
    |   |   |           remapping.d.cts
    |   |   |           remapping.d.cts.map
    |   |   |           remapping.d.mts
    |   |   |           remapping.d.mts.map
    |   |   |           source-map-tree.d.cts
    |   |   |           source-map-tree.d.cts.map
    |   |   |           source-map-tree.d.mts
    |   |   |           source-map-tree.d.mts.map
    |   |   |           source-map.d.cts
    |   |   |           source-map.d.cts.map
    |   |   |           source-map.d.mts
    |   |   |           source-map.d.mts.map
    |   |   |           types.d.cts
    |   |   |           types.d.cts.map
    |   |   |           types.d.mts
    |   |   |           types.d.mts.map
    |   |   |           
    |   |   +---resolve-uri
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---dist
    |   |   |       |   resolve-uri.mjs
    |   |   |       |   resolve-uri.mjs.map
    |   |   |       |   resolve-uri.umd.js
    |   |   |       |   resolve-uri.umd.js.map
    |   |   |       |   
    |   |   |       \---types
    |   |   |               resolve-uri.d.ts
    |   |   |               
    |   |   +---sourcemap-codec
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   +---dist
    |   |   |   |       sourcemap-codec.mjs
    |   |   |   |       sourcemap-codec.mjs.map
    |   |   |   |       sourcemap-codec.umd.js
    |   |   |   |       sourcemap-codec.umd.js.map
    |   |   |   |       
    |   |   |   +---src
    |   |   |   |       scopes.ts
    |   |   |   |       sourcemap-codec.ts
    |   |   |   |       strings.ts
    |   |   |   |       vlq.ts
    |   |   |   |       
    |   |   |   \---types
    |   |   |           scopes.d.cts
    |   |   |           scopes.d.cts.map
    |   |   |           scopes.d.mts
    |   |   |           scopes.d.mts.map
    |   |   |           sourcemap-codec.d.cts
    |   |   |           sourcemap-codec.d.cts.map
    |   |   |           sourcemap-codec.d.mts
    |   |   |           sourcemap-codec.d.mts.map
    |   |   |           strings.d.cts
    |   |   |           strings.d.cts.map
    |   |   |           strings.d.mts
    |   |   |           strings.d.mts.map
    |   |   |           vlq.d.cts
    |   |   |           vlq.d.cts.map
    |   |   |           vlq.d.mts
    |   |   |           vlq.d.mts.map
    |   |   |           
    |   |   \---trace-mapping
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   README.md
    |   |       |   
    |   |       +---dist
    |   |       |       trace-mapping.mjs
    |   |       |       trace-mapping.mjs.map
    |   |       |       trace-mapping.umd.js
    |   |       |       trace-mapping.umd.js.map
    |   |       |       
    |   |       +---src
    |   |       |       binary-search.ts
    |   |       |       by-source.ts
    |   |       |       flatten-map.ts
    |   |       |       resolve.ts
    |   |       |       sort.ts
    |   |       |       sourcemap-segment.ts
    |   |       |       strip-filename.ts
    |   |       |       trace-mapping.ts
    |   |       |       types.ts
    |   |       |       
    |   |       \---types
    |   |               binary-search.d.cts
    |   |               binary-search.d.cts.map
    |   |               binary-search.d.mts
    |   |               binary-search.d.mts.map
    |   |               by-source.d.cts
    |   |               by-source.d.cts.map
    |   |               by-source.d.mts
    |   |               by-source.d.mts.map
    |   |               flatten-map.d.cts
    |   |               flatten-map.d.cts.map
    |   |               flatten-map.d.mts
    |   |               flatten-map.d.mts.map
    |   |               resolve.d.cts
    |   |               resolve.d.cts.map
    |   |               resolve.d.mts
    |   |               resolve.d.mts.map
    |   |               sort.d.cts
    |   |               sort.d.cts.map
    |   |               sort.d.mts
    |   |               sort.d.mts.map
    |   |               sourcemap-segment.d.cts
    |   |               sourcemap-segment.d.cts.map
    |   |               sourcemap-segment.d.mts
    |   |               sourcemap-segment.d.mts.map
    |   |               strip-filename.d.cts
    |   |               strip-filename.d.cts.map
    |   |               strip-filename.d.mts
    |   |               strip-filename.d.mts.map
    |   |               trace-mapping.d.cts
    |   |               trace-mapping.d.cts.map
    |   |               trace-mapping.d.mts
    |   |               trace-mapping.d.mts.map
    |   |               types.d.cts
    |   |               types.d.cts.map
    |   |               types.d.mts
    |   |               types.d.mts.map
    |   |               
    |   +---@remix-run
    |   |   \---router
    |   |       |   CHANGELOG.md
    |   |       |   history.ts
    |   |       |   index.ts
    |   |       |   LICENSE.md
    |   |       |   package.json
    |   |       |   README.md
    |   |       |   router.ts
    |   |       |   utils.ts
    |   |       |   
    |   |       \---dist
    |   |               history.d.ts
    |   |               index.d.ts
    |   |               router.cjs.js
    |   |               router.cjs.js.map
    |   |               router.d.ts
    |   |               router.js
    |   |               router.js.map
    |   |               router.umd.js
    |   |               router.umd.js.map
    |   |               router.umd.min.js
    |   |               router.umd.min.js.map
    |   |               utils.d.ts
    |   |               
    |   +---@rolldown
    |   |   \---pluginutils
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   
    |   |       \---dist
    |   |               index.cjs
    |   |               index.d.cts
    |   |               index.d.ts
    |   |               index.js
    |   |               
    |   +---@rollup
    |   |   +---rollup-win32-x64-gnu
    |   |   |       package.json
    |   |   |       README.md
    |   |   |       rollup.win32-x64-gnu.node
    |   |   |       
    |   |   \---rollup-win32-x64-msvc
    |   |           package.json
    |   |           README.md
    |   |           rollup.win32-x64-msvc.node
    |   |           
    |   +---@types
    |   |   +---babel__core
    |   |   |       index.d.ts
    |   |   |       LICENSE
    |   |   |       package.json
    |   |   |       README.md
    |   |   |       
    |   |   +---babel__generator
    |   |   |       index.d.ts
    |   |   |       LICENSE
    |   |   |       package.json
    |   |   |       README.md
    |   |   |       
    |   |   +---babel__template
    |   |   |       index.d.ts
    |   |   |       LICENSE
    |   |   |       package.json
    |   |   |       README.md
    |   |   |       
    |   |   +---babel__traverse
    |   |   |       index.d.ts
    |   |   |       LICENSE
    |   |   |       package.json
    |   |   |       README.md
    |   |   |       
    |   |   \---estree
    |   |           flow.d.ts
    |   |           index.d.ts
    |   |           LICENSE
    |   |           package.json
    |   |           README.md
    |   |           
    |   +---@vitejs
    |   |   \---plugin-react
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   README.md
    |   |       |   
    |   |       \---dist
    |   |               index.cjs
    |   |               index.d.cts
    |   |               index.d.ts
    |   |               index.js
    |   |               refresh-runtime.js
    |   |               
    |   +---asynckit
    |   |   |   bench.js
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   parallel.js
    |   |   |   README.md
    |   |   |   serial.js
    |   |   |   serialOrdered.js
    |   |   |   stream.js
    |   |   |   
    |   |   \---lib
    |   |           abort.js
    |   |           async.js
    |   |           defer.js
    |   |           iterate.js
    |   |           readable_asynckit.js
    |   |           readable_parallel.js
    |   |           readable_serial.js
    |   |           readable_serial_ordered.js
    |   |           state.js
    |   |           streamify.js
    |   |           terminator.js
    |   |           
    |   +---axios
    |   |   |   CHANGELOG.md
    |   |   |   index.d.cts
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   MIGRATION_GUIDE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---dist
    |   |   |   |   axios.js
    |   |   |   |   axios.js.map
    |   |   |   |   axios.min.js
    |   |   |   |   axios.min.js.map
    |   |   |   |   
    |   |   |   +---browser
    |   |   |   |       axios.cjs
    |   |   |   |       axios.cjs.map
    |   |   |   |       
    |   |   |   +---esm
    |   |   |   |       axios.js
    |   |   |   |       axios.js.map
    |   |   |   |       axios.min.js
    |   |   |   |       axios.min.js.map
    |   |   |   |       
    |   |   |   \---node
    |   |   |           axios.cjs
    |   |   |           axios.cjs.map
    |   |   |           
    |   |   \---lib
    |   |       |   axios.js
    |   |       |   utils.js
    |   |       |   
    |   |       +---adapters
    |   |       |       adapters.js
    |   |       |       fetch.js
    |   |       |       http.js
    |   |       |       README.md
    |   |       |       xhr.js
    |   |       |       
    |   |       +---cancel
    |   |       |       CanceledError.js
    |   |       |       CancelToken.js
    |   |       |       isCancel.js
    |   |       |       
    |   |       +---core
    |   |       |       Axios.js
    |   |       |       AxiosError.js
    |   |       |       AxiosHeaders.js
    |   |       |       buildFullPath.js
    |   |       |       dispatchRequest.js
    |   |       |       InterceptorManager.js
    |   |       |       mergeConfig.js
    |   |       |       README.md
    |   |       |       settle.js
    |   |       |       transformData.js
    |   |       |       
    |   |       +---defaults
    |   |       |       index.js
    |   |       |       transitional.js
    |   |       |       
    |   |       +---env
    |   |       |   |   data.js
    |   |       |   |   README.md
    |   |       |   |   
    |   |       |   \---classes
    |   |       |           FormData.js
    |   |       |           
    |   |       +---helpers
    |   |       |       AxiosTransformStream.js
    |   |       |       AxiosURLSearchParams.js
    |   |       |       bind.js
    |   |       |       buildURL.js
    |   |       |       callbackify.js
    |   |       |       combineURLs.js
    |   |       |       composeSignals.js
    |   |       |       cookies.js
    |   |       |       deprecatedMethod.js
    |   |       |       estimateDataURLDecodedBytes.js
    |   |       |       formDataToJSON.js
    |   |       |       formDataToStream.js
    |   |       |       fromDataURI.js
    |   |       |       HttpStatusCode.js
    |   |       |       isAbsoluteURL.js
    |   |       |       isAxiosError.js
    |   |       |       isURLSameOrigin.js
    |   |       |       null.js
    |   |       |       parseHeaders.js
    |   |       |       parseProtocol.js
    |   |       |       progressEventReducer.js
    |   |       |       readBlob.js
    |   |       |       README.md
    |   |       |       resolveConfig.js
    |   |       |       speedometer.js
    |   |       |       spread.js
    |   |       |       throttle.js
    |   |       |       toFormData.js
    |   |       |       toURLEncodedForm.js
    |   |       |       trackStream.js
    |   |       |       validator.js
    |   |       |       ZlibHeaderTransformStream.js
    |   |       |       
    |   |       \---platform
    |   |           |   index.js
    |   |           |   
    |   |           +---browser
    |   |           |   |   index.js
    |   |           |   |   
    |   |           |   \---classes
    |   |           |           Blob.js
    |   |           |           FormData.js
    |   |           |           URLSearchParams.js
    |   |           |           
    |   |           +---common
    |   |           |       utils.js
    |   |           |       
    |   |           \---node
    |   |               |   index.js
    |   |               |   
    |   |               \---classes
    |   |                       FormData.js
    |   |                       URLSearchParams.js
    |   |                       
    |   +---baseline-browser-mapping
    |   |   |   LICENSE.txt
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---dist
    |   |           cli.js
    |   |           index.cjs
    |   |           index.d.ts
    |   |           index.js
    |   |           
    |   +---browserslist
    |   |       browser.js
    |   |       cli.js
    |   |       error.d.ts
    |   |       error.js
    |   |       index.d.ts
    |   |       index.js
    |   |       LICENSE
    |   |       node.js
    |   |       package.json
    |   |       parse.js
    |   |       README.md
    |   |       
    |   +---call-bind-apply-helpers
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   actualApply.d.ts
    |   |   |   actualApply.js
    |   |   |   applyBind.d.ts
    |   |   |   applyBind.js
    |   |   |   CHANGELOG.md
    |   |   |   functionApply.d.ts
    |   |   |   functionApply.js
    |   |   |   functionCall.d.ts
    |   |   |   functionCall.js
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   reflectApply.d.ts
    |   |   |   reflectApply.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---caniuse-lite
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---data
    |   |   |   |   agents.js
    |   |   |   |   browsers.js
    |   |   |   |   browserVersions.js
    |   |   |   |   features.js
    |   |   |   |   
    |   |   |   +---features
    |   |   |   |       aac.js
    |   |   |   |       abortcontroller.js
    |   |   |   |       ac3-ec3.js
    |   |   |   |       accelerometer.js
    |   |   |   |       addeventlistener.js
    |   |   |   |       alternate-stylesheet.js
    |   |   |   |       ambient-light.js
    |   |   |   |       apng.js
    |   |   |   |       array-find-index.js
    |   |   |   |       array-find.js
    |   |   |   |       array-flat.js
    |   |   |   |       array-includes.js
    |   |   |   |       arrow-functions.js
    |   |   |   |       asmjs.js
    |   |   |   |       async-clipboard.js
    |   |   |   |       async-functions.js
    |   |   |   |       atob-btoa.js
    |   |   |   |       audio-api.js
    |   |   |   |       audio.js
    |   |   |   |       audiotracks.js
    |   |   |   |       autofocus.js
    |   |   |   |       auxclick.js
    |   |   |   |       av1.js
    |   |   |   |       avif.js
    |   |   |   |       background-attachment.js
    |   |   |   |       background-clip-text.js
    |   |   |   |       background-img-opts.js
    |   |   |   |       background-position-x-y.js
    |   |   |   |       background-repeat-round-space.js
    |   |   |   |       background-sync.js
    |   |   |   |       battery-status.js
    |   |   |   |       beacon.js
    |   |   |   |       beforeafterprint.js
    |   |   |   |       bigint.js
    |   |   |   |       blobbuilder.js
    |   |   |   |       bloburls.js
    |   |   |   |       border-image.js
    |   |   |   |       border-radius.js
    |   |   |   |       broadcastchannel.js
    |   |   |   |       brotli.js
    |   |   |   |       calc.js
    |   |   |   |       canvas-blending.js
    |   |   |   |       canvas-text.js
    |   |   |   |       canvas.js
    |   |   |   |       ch-unit.js
    |   |   |   |       chacha20-poly1305.js
    |   |   |   |       channel-messaging.js
    |   |   |   |       childnode-remove.js
    |   |   |   |       classlist.js
    |   |   |   |       client-hints-dpr-width-viewport.js
    |   |   |   |       clipboard.js
    |   |   |   |       colr-v1.js
    |   |   |   |       colr.js
    |   |   |   |       comparedocumentposition.js
    |   |   |   |       console-basic.js
    |   |   |   |       console-time.js
    |   |   |   |       const.js
    |   |   |   |       constraint-validation.js
    |   |   |   |       contenteditable.js
    |   |   |   |       contentsecuritypolicy.js
    |   |   |   |       contentsecuritypolicy2.js
    |   |   |   |       cookie-store-api.js
    |   |   |   |       cors.js
    |   |   |   |       createimagebitmap.js
    |   |   |   |       credential-management.js
    |   |   |   |       cross-document-view-transitions.js
    |   |   |   |       cryptography.js
    |   |   |   |       css-all.js
    |   |   |   |       css-anchor-positioning.js
    |   |   |   |       css-animation.js
    |   |   |   |       css-any-link.js
    |   |   |   |       css-appearance.js
    |   |   |   |       css-at-counter-style.js
    |   |   |   |       css-autofill.js
    |   |   |   |       css-backdrop-filter.js
    |   |   |   |       css-background-offsets.js
    |   |   |   |       css-backgroundblendmode.js
    |   |   |   |       css-boxdecorationbreak.js
    |   |   |   |       css-boxshadow.js
    |   |   |   |       css-canvas.js
    |   |   |   |       css-caret-color.js
    |   |   |   |       css-cascade-layers.js
    |   |   |   |       css-cascade-scope.js
    |   |   |   |       css-case-insensitive.js
    |   |   |   |       css-clip-path.js
    |   |   |   |       css-color-adjust.js
    |   |   |   |       css-color-function.js
    |   |   |   |       css-conic-gradients.js
    |   |   |   |       css-container-queries-style.js
    |   |   |   |       css-container-queries.js
    |   |   |   |       css-container-query-units.js
    |   |   |   |       css-containment.js
    |   |   |   |       css-content-visibility.js
    |   |   |   |       css-counters.js
    |   |   |   |       css-crisp-edges.js
    |   |   |   |       css-cross-fade.js
    |   |   |   |       css-default-pseudo.js
    |   |   |   |       css-descendant-gtgt.js
    |   |   |   |       css-deviceadaptation.js
    |   |   |   |       css-dir-pseudo.js
    |   |   |   |       css-display-contents.js
    |   |   |   |       css-element-function.js
    |   |   |   |       css-env-function.js
    |   |   |   |       css-exclusions.js
    |   |   |   |       css-featurequeries.js
    |   |   |   |       css-file-selector-button.js
    |   |   |   |       css-filter-function.js
    |   |   |   |       css-filters.js
    |   |   |   |       css-first-letter.js
    |   |   |   |       css-first-line.js
    |   |   |   |       css-fixed.js
    |   |   |   |       css-focus-visible.js
    |   |   |   |       css-focus-within.js
    |   |   |   |       css-font-palette.js
    |   |   |   |       css-font-rendering-controls.js
    |   |   |   |       css-font-stretch.js
    |   |   |   |       css-gencontent.js
    |   |   |   |       css-gradients.js
    |   |   |   |       css-grid-animation.js
    |   |   |   |       css-grid.js
    |   |   |   |       css-hanging-punctuation.js
    |   |   |   |       css-has.js
    |   |   |   |       css-hyphens.js
    |   |   |   |       css-if.js
    |   |   |   |       css-image-orientation.js
    |   |   |   |       css-image-set.js
    |   |   |   |       css-in-out-of-range.js
    |   |   |   |       css-indeterminate-pseudo.js
    |   |   |   |       css-initial-letter.js
    |   |   |   |       css-initial-value.js
    |   |   |   |       css-lch-lab.js
    |   |   |   |       css-letter-spacing.js
    |   |   |   |       css-line-clamp.js
    |   |   |   |       css-logical-props.js
    |   |   |   |       css-marker-pseudo.js
    |   |   |   |       css-masks.js
    |   |   |   |       css-matches-pseudo.js
    |   |   |   |       css-math-functions.js
    |   |   |   |       css-media-interaction.js
    |   |   |   |       css-media-range-syntax.js
    |   |   |   |       css-media-resolution.js
    |   |   |   |       css-media-scripting.js
    |   |   |   |       css-mediaqueries.js
    |   |   |   |       css-mixblendmode.js
    |   |   |   |       css-module-scripts.js
    |   |   |   |       css-motion-paths.js
    |   |   |   |       css-namespaces.js
    |   |   |   |       css-nesting.js
    |   |   |   |       css-not-sel-list.js
    |   |   |   |       css-nth-child-of.js
    |   |   |   |       css-opacity.js
    |   |   |   |       css-optional-pseudo.js
    |   |   |   |       css-overflow-anchor.js
    |   |   |   |       css-overflow-overlay.js
    |   |   |   |       css-overflow.js
    |   |   |   |       css-overscroll-behavior.js
    |   |   |   |       css-page-break.js
    |   |   |   |       css-paged-media.js
    |   |   |   |       css-paint-api.js
    |   |   |   |       css-placeholder-shown.js
    |   |   |   |       css-placeholder.js
    |   |   |   |       css-print-color-adjust.js
    |   |   |   |       css-read-only-write.js
    |   |   |   |       css-rebeccapurple.js
    |   |   |   |       css-reflections.js
    |   |   |   |       css-regions.js
    |   |   |   |       css-relative-colors.js
    |   |   |   |       css-repeating-gradients.js
    |   |   |   |       css-resize.js
    |   |   |   |       css-revert-value.js
    |   |   |   |       css-rrggbbaa.js
    |   |   |   |       css-scroll-behavior.js
    |   |   |   |       css-scrollbar.js
    |   |   |   |       css-sel2.js
    |   |   |   |       css-sel3.js
    |   |   |   |       css-selection.js
    |   |   |   |       css-shapes.js
    |   |   |   |       css-snappoints.js
    |   |   |   |       css-sticky.js
    |   |   |   |       css-subgrid.js
    |   |   |   |       css-supports-api.js
    |   |   |   |       css-table.js
    |   |   |   |       css-text-align-last.js
    |   |   |   |       css-text-box-trim.js
    |   |   |   |       css-text-indent.js
    |   |   |   |       css-text-justify.js
    |   |   |   |       css-text-orientation.js
    |   |   |   |       css-text-spacing.js
    |   |   |   |       css-text-wrap-balance.js
    |   |   |   |       css-textshadow.js
    |   |   |   |       css-touch-action.js
    |   |   |   |       css-transitions.js
    |   |   |   |       css-unicode-bidi.js
    |   |   |   |       css-unset-value.js
    |   |   |   |       css-variables.js
    |   |   |   |       css-when-else.js
    |   |   |   |       css-widows-orphans.js
    |   |   |   |       css-width-stretch.js
    |   |   |   |       css-writing-mode.js
    |   |   |   |       css-zoom.js
    |   |   |   |       css3-attr.js
    |   |   |   |       css3-boxsizing.js
    |   |   |   |       css3-colors.js
    |   |   |   |       css3-cursors-grab.js
    |   |   |   |       css3-cursors-newer.js
    |   |   |   |       css3-cursors.js
    |   |   |   |       css3-tabsize.js
    |   |   |   |       currentcolor.js
    |   |   |   |       custom-elements.js
    |   |   |   |       custom-elementsv1.js
    |   |   |   |       customevent.js
    |   |   |   |       datalist.js
    |   |   |   |       dataset.js
    |   |   |   |       datauri.js
    |   |   |   |       date-tolocaledatestring.js
    |   |   |   |       declarative-shadow-dom.js
    |   |   |   |       decorators.js
    |   |   |   |       details.js
    |   |   |   |       deviceorientation.js
    |   |   |   |       devicepixelratio.js
    |   |   |   |       dialog.js
    |   |   |   |       dispatchevent.js
    |   |   |   |       dnssec.js
    |   |   |   |       do-not-track.js
    |   |   |   |       document-currentscript.js
    |   |   |   |       document-evaluate-xpath.js
    |   |   |   |       document-execcommand.js
    |   |   |   |       document-policy.js
    |   |   |   |       document-scrollingelement.js
    |   |   |   |       documenthead.js
    |   |   |   |       dom-manip-convenience.js
    |   |   |   |       dom-range.js
    |   |   |   |       domcontentloaded.js
    |   |   |   |       dommatrix.js
    |   |   |   |       download.js
    |   |   |   |       dragndrop.js
    |   |   |   |       element-closest.js
    |   |   |   |       element-from-point.js
    |   |   |   |       element-scroll-methods.js
    |   |   |   |       eme.js
    |   |   |   |       eot.js
    |   |   |   |       es5.js
    |   |   |   |       es6-class.js
    |   |   |   |       es6-generators.js
    |   |   |   |       es6-module-dynamic-import.js
    |   |   |   |       es6-module.js
    |   |   |   |       es6-number.js
    |   |   |   |       es6-string-includes.js
    |   |   |   |       es6.js
    |   |   |   |       eventsource.js
    |   |   |   |       extended-system-fonts.js
    |   |   |   |       feature-policy.js
    |   |   |   |       fetch.js
    |   |   |   |       fieldset-disabled.js
    |   |   |   |       fileapi.js
    |   |   |   |       filereader.js
    |   |   |   |       filereadersync.js
    |   |   |   |       filesystem.js
    |   |   |   |       flac.js
    |   |   |   |       flexbox-gap.js
    |   |   |   |       flexbox.js
    |   |   |   |       flow-root.js
    |   |   |   |       focusin-focusout-events.js
    |   |   |   |       font-family-system-ui.js
    |   |   |   |       font-feature.js
    |   |   |   |       font-kerning.js
    |   |   |   |       font-loading.js
    |   |   |   |       font-size-adjust.js
    |   |   |   |       font-smooth.js
    |   |   |   |       font-unicode-range.js
    |   |   |   |       font-variant-alternates.js
    |   |   |   |       font-variant-numeric.js
    |   |   |   |       fontface.js
    |   |   |   |       form-attribute.js
    |   |   |   |       form-submit-attributes.js
    |   |   |   |       form-validation.js
    |   |   |   |       forms.js
    |   |   |   |       fullscreen.js
    |   |   |   |       gamepad.js
    |   |   |   |       geolocation.js
    |   |   |   |       getboundingclientrect.js
    |   |   |   |       getcomputedstyle.js
    |   |   |   |       getelementsbyclassname.js
    |   |   |   |       getrandomvalues.js
    |   |   |   |       gyroscope.js
    |   |   |   |       hardwareconcurrency.js
    |   |   |   |       hashchange.js
    |   |   |   |       heif.js
    |   |   |   |       hevc.js
    |   |   |   |       hidden.js
    |   |   |   |       high-resolution-time.js
    |   |   |   |       history.js
    |   |   |   |       html-media-capture.js
    |   |   |   |       html5semantic.js
    |   |   |   |       http-live-streaming.js
    |   |   |   |       http2.js
    |   |   |   |       http3.js
    |   |   |   |       iframe-sandbox.js
    |   |   |   |       iframe-seamless.js
    |   |   |   |       iframe-srcdoc.js
    |   |   |   |       imagecapture.js
    |   |   |   |       ime.js
    |   |   |   |       img-naturalwidth-naturalheight.js
    |   |   |   |       import-maps.js
    |   |   |   |       imports.js
    |   |   |   |       indeterminate-checkbox.js
    |   |   |   |       indexeddb.js
    |   |   |   |       indexeddb2.js
    |   |   |   |       inline-block.js
    |   |   |   |       innertext.js
    |   |   |   |       input-autocomplete-onoff.js
    |   |   |   |       input-color.js
    |   |   |   |       input-datetime.js
    |   |   |   |       input-email-tel-url.js
    |   |   |   |       input-event.js
    |   |   |   |       input-file-accept.js
    |   |   |   |       input-file-directory.js
    |   |   |   |       input-file-multiple.js
    |   |   |   |       input-inputmode.js
    |   |   |   |       input-minlength.js
    |   |   |   |       input-number.js
    |   |   |   |       input-pattern.js
    |   |   |   |       input-placeholder.js
    |   |   |   |       input-range.js
    |   |   |   |       input-search.js
    |   |   |   |       input-selection.js
    |   |   |   |       insert-adjacent.js
    |   |   |   |       insertadjacenthtml.js
    |   |   |   |       internationalization.js
    |   |   |   |       intersectionobserver-v2.js
    |   |   |   |       intersectionobserver.js
    |   |   |   |       intl-pluralrules.js
    |   |   |   |       intrinsic-width.js
    |   |   |   |       jpeg2000.js
    |   |   |   |       jpegxl.js
    |   |   |   |       jpegxr.js
    |   |   |   |       js-regexp-lookbehind.js
    |   |   |   |       json.js
    |   |   |   |       justify-content-space-evenly.js
    |   |   |   |       kerning-pairs-ligatures.js
    |   |   |   |       keyboardevent-charcode.js
    |   |   |   |       keyboardevent-code.js
    |   |   |   |       keyboardevent-getmodifierstate.js
    |   |   |   |       keyboardevent-key.js
    |   |   |   |       keyboardevent-location.js
    |   |   |   |       keyboardevent-which.js
    |   |   |   |       lazyload.js
    |   |   |   |       let.js
    |   |   |   |       link-icon-png.js
    |   |   |   |       link-icon-svg.js
    |   |   |   |       link-rel-dns-prefetch.js
    |   |   |   |       link-rel-modulepreload.js
    |   |   |   |       link-rel-preconnect.js
    |   |   |   |       link-rel-prefetch.js
    |   |   |   |       link-rel-preload.js
    |   |   |   |       link-rel-prerender.js
    |   |   |   |       loading-lazy-attr.js
    |   |   |   |       localecompare.js
    |   |   |   |       magnetometer.js
    |   |   |   |       matchesselector.js
    |   |   |   |       matchmedia.js
    |   |   |   |       mathml.js
    |   |   |   |       maxlength.js
    |   |   |   |       mdn-css-backdrop-pseudo-element.js
    |   |   |   |       mdn-css-unicode-bidi-isolate-override.js
    |   |   |   |       mdn-css-unicode-bidi-isolate.js
    |   |   |   |       mdn-css-unicode-bidi-plaintext.js
    |   |   |   |       mdn-text-decoration-color.js
    |   |   |   |       mdn-text-decoration-line.js
    |   |   |   |       mdn-text-decoration-shorthand.js
    |   |   |   |       mdn-text-decoration-style.js
    |   |   |   |       media-fragments.js
    |   |   |   |       mediacapture-fromelement.js
    |   |   |   |       mediarecorder.js
    |   |   |   |       mediasource.js
    |   |   |   |       menu.js
    |   |   |   |       meta-theme-color.js
    |   |   |   |       meter.js
    |   |   |   |       midi.js
    |   |   |   |       minmaxwh.js
    |   |   |   |       mp3.js
    |   |   |   |       mpeg-dash.js
    |   |   |   |       mpeg4.js
    |   |   |   |       multibackgrounds.js
    |   |   |   |       multicolumn.js
    |   |   |   |       mutation-events.js
    |   |   |   |       mutationobserver.js
    |   |   |   |       namevalue-storage.js
    |   |   |   |       native-filesystem-api.js
    |   |   |   |       nav-timing.js
    |   |   |   |       netinfo.js
    |   |   |   |       notifications.js
    |   |   |   |       object-entries.js
    |   |   |   |       object-fit.js
    |   |   |   |       object-observe.js
    |   |   |   |       object-values.js
    |   |   |   |       objectrtc.js
    |   |   |   |       offline-apps.js
    |   |   |   |       offscreencanvas.js
    |   |   |   |       ogg-vorbis.js
    |   |   |   |       ogv.js
    |   |   |   |       ol-reversed.js
    |   |   |   |       once-event-listener.js
    |   |   |   |       online-status.js
    |   |   |   |       opus.js
    |   |   |   |       orientation-sensor.js
    |   |   |   |       outline.js
    |   |   |   |       pad-start-end.js
    |   |   |   |       page-transition-events.js
    |   |   |   |       pagevisibility.js
    |   |   |   |       passive-event-listener.js
    |   |   |   |       passkeys.js
    |   |   |   |       passwordrules.js
    |   |   |   |       path2d.js
    |   |   |   |       payment-request.js
    |   |   |   |       pdf-viewer.js
    |   |   |   |       permissions-api.js
    |   |   |   |       permissions-policy.js
    |   |   |   |       picture-in-picture.js
    |   |   |   |       picture.js
    |   |   |   |       ping.js
    |   |   |   |       png-alpha.js
    |   |   |   |       pointer-events.js
    |   |   |   |       pointer.js
    |   |   |   |       pointerlock.js
    |   |   |   |       portals.js
    |   |   |   |       prefers-color-scheme.js
    |   |   |   |       prefers-reduced-motion.js
    |   |   |   |       progress.js
    |   |   |   |       promise-finally.js
    |   |   |   |       promises.js
    |   |   |   |       proximity.js
    |   |   |   |       proxy.js
    |   |   |   |       publickeypinning.js
    |   |   |   |       push-api.js
    |   |   |   |       queryselector.js
    |   |   |   |       readonly-attr.js
    |   |   |   |       referrer-policy.js
    |   |   |   |       registerprotocolhandler.js
    |   |   |   |       rel-noopener.js
    |   |   |   |       rel-noreferrer.js
    |   |   |   |       rellist.js
    |   |   |   |       rem.js
    |   |   |   |       requestanimationframe.js
    |   |   |   |       requestidlecallback.js
    |   |   |   |       resizeobserver.js
    |   |   |   |       resource-timing.js
    |   |   |   |       rest-parameters.js
    |   |   |   |       rtcpeerconnection.js
    |   |   |   |       ruby.js
    |   |   |   |       run-in.js
    |   |   |   |       same-site-cookie-attribute.js
    |   |   |   |       screen-orientation.js
    |   |   |   |       script-async.js
    |   |   |   |       script-defer.js
    |   |   |   |       scrollintoview.js
    |   |   |   |       scrollintoviewifneeded.js
    |   |   |   |       sdch.js
    |   |   |   |       selection-api.js
    |   |   |   |       selectlist.js
    |   |   |   |       server-timing.js
    |   |   |   |       serviceworkers.js
    |   |   |   |       setimmediate.js
    |   |   |   |       shadowdom.js
    |   |   |   |       shadowdomv1.js
    |   |   |   |       sharedarraybuffer.js
    |   |   |   |       sharedworkers.js
    |   |   |   |       sni.js
    |   |   |   |       spdy.js
    |   |   |   |       speech-recognition.js
    |   |   |   |       speech-synthesis.js
    |   |   |   |       spellcheck-attribute.js
    |   |   |   |       sql-storage.js
    |   |   |   |       srcset.js
    |   |   |   |       stream.js
    |   |   |   |       streams.js
    |   |   |   |       stricttransportsecurity.js
    |   |   |   |       style-scoped.js
    |   |   |   |       subresource-bundling.js
    |   |   |   |       subresource-integrity.js
    |   |   |   |       svg-css.js
    |   |   |   |       svg-filters.js
    |   |   |   |       svg-fonts.js
    |   |   |   |       svg-fragment.js
    |   |   |   |       svg-html.js
    |   |   |   |       svg-html5.js
    |   |   |   |       svg-img.js
    |   |   |   |       svg-smil.js
    |   |   |   |       svg.js
    |   |   |   |       sxg.js
    |   |   |   |       tabindex-attr.js
    |   |   |   |       template-literals.js
    |   |   |   |       template.js
    |   |   |   |       temporal.js
    |   |   |   |       testfeat.js
    |   |   |   |       text-decoration.js
    |   |   |   |       text-emphasis.js
    |   |   |   |       text-overflow.js
    |   |   |   |       text-size-adjust.js
    |   |   |   |       text-stroke.js
    |   |   |   |       textcontent.js
    |   |   |   |       textencoder.js
    |   |   |   |       tls1-1.js
    |   |   |   |       tls1-2.js
    |   |   |   |       tls1-3.js
    |   |   |   |       touch.js
    |   |   |   |       transforms2d.js
    |   |   |   |       transforms3d.js
    |   |   |   |       trusted-types.js
    |   |   |   |       ttf.js
    |   |   |   |       typedarrays.js
    |   |   |   |       u2f.js
    |   |   |   |       unhandledrejection.js
    |   |   |   |       upgradeinsecurerequests.js
    |   |   |   |       url-scroll-to-text-fragment.js
    |   |   |   |       url.js
    |   |   |   |       urlsearchparams.js
    |   |   |   |       use-strict.js
    |   |   |   |       user-select-none.js
    |   |   |   |       user-timing.js
    |   |   |   |       variable-fonts.js
    |   |   |   |       vector-effect.js
    |   |   |   |       vibration.js
    |   |   |   |       video.js
    |   |   |   |       videotracks.js
    |   |   |   |       view-transitions.js
    |   |   |   |       viewport-unit-variants.js
    |   |   |   |       viewport-units.js
    |   |   |   |       wai-aria.js
    |   |   |   |       wake-lock.js
    |   |   |   |       wasm-bigint.js
    |   |   |   |       wasm-bulk-memory.js
    |   |   |   |       wasm-extended-const.js
    |   |   |   |       wasm-gc.js
    |   |   |   |       wasm-multi-memory.js
    |   |   |   |       wasm-multi-value.js
    |   |   |   |       wasm-mutable-globals.js
    |   |   |   |       wasm-nontrapping-fptoint.js
    |   |   |   |       wasm-reference-types.js
    |   |   |   |       wasm-relaxed-simd.js
    |   |   |   |       wasm-signext.js
    |   |   |   |       wasm-simd.js
    |   |   |   |       wasm-tail-calls.js
    |   |   |   |       wasm-threads.js
    |   |   |   |       wasm.js
    |   |   |   |       wav.js
    |   |   |   |       wbr-element.js
    |   |   |   |       web-animation.js
    |   |   |   |       web-app-manifest.js
    |   |   |   |       web-bluetooth.js
    |   |   |   |       web-serial.js
    |   |   |   |       web-share.js
    |   |   |   |       webauthn.js
    |   |   |   |       webcodecs.js
    |   |   |   |       webgl.js
    |   |   |   |       webgl2.js
    |   |   |   |       webgpu.js
    |   |   |   |       webhid.js
    |   |   |   |       webkit-user-drag.js
    |   |   |   |       webm.js
    |   |   |   |       webnfc.js
    |   |   |   |       webp.js
    |   |   |   |       websockets.js
    |   |   |   |       webtransport.js
    |   |   |   |       webusb.js
    |   |   |   |       webvr.js
    |   |   |   |       webvtt.js
    |   |   |   |       webworkers.js
    |   |   |   |       webxr.js
    |   |   |   |       will-change.js
    |   |   |   |       woff.js
    |   |   |   |       woff2.js
    |   |   |   |       word-break.js
    |   |   |   |       wordwrap.js
    |   |   |   |       x-doc-messaging.js
    |   |   |   |       x-frame-options.js
    |   |   |   |       xhr2.js
    |   |   |   |       xhtml.js
    |   |   |   |       xhtmlsmil.js
    |   |   |   |       xml-serializer.js
    |   |   |   |       zstd.js
    |   |   |   |       
    |   |   |   \---regions
    |   |   |           AD.js
    |   |   |           AE.js
    |   |   |           AF.js
    |   |   |           AG.js
    |   |   |           AI.js
    |   |   |           AL.js
    |   |   |           alt-af.js
    |   |   |           alt-an.js
    |   |   |           alt-as.js
    |   |   |           alt-eu.js
    |   |   |           alt-na.js
    |   |   |           alt-oc.js
    |   |   |           alt-sa.js
    |   |   |           alt-ww.js
    |   |   |           AM.js
    |   |   |           AO.js
    |   |   |           AR.js
    |   |   |           AS.js
    |   |   |           AT.js
    |   |   |           AU.js
    |   |   |           AW.js
    |   |   |           AX.js
    |   |   |           AZ.js
    |   |   |           BA.js
    |   |   |           BB.js
    |   |   |           BD.js
    |   |   |           BE.js
    |   |   |           BF.js
    |   |   |           BG.js
    |   |   |           BH.js
    |   |   |           BI.js
    |   |   |           BJ.js
    |   |   |           BM.js
    |   |   |           BN.js
    |   |   |           BO.js
    |   |   |           BR.js
    |   |   |           BS.js
    |   |   |           BT.js
    |   |   |           BW.js
    |   |   |           BY.js
    |   |   |           BZ.js
    |   |   |           CA.js
    |   |   |           CD.js
    |   |   |           CF.js
    |   |   |           CG.js
    |   |   |           CH.js
    |   |   |           CI.js
    |   |   |           CK.js
    |   |   |           CL.js
    |   |   |           CM.js
    |   |   |           CN.js
    |   |   |           CO.js
    |   |   |           CR.js
    |   |   |           CU.js
    |   |   |           CV.js
    |   |   |           CX.js
    |   |   |           CY.js
    |   |   |           CZ.js
    |   |   |           DE.js
    |   |   |           DJ.js
    |   |   |           DK.js
    |   |   |           DM.js
    |   |   |           DO.js
    |   |   |           DZ.js
    |   |   |           EC.js
    |   |   |           EE.js
    |   |   |           EG.js
    |   |   |           ER.js
    |   |   |           ES.js
    |   |   |           ET.js
    |   |   |           FI.js
    |   |   |           FJ.js
    |   |   |           FK.js
    |   |   |           FM.js
    |   |   |           FO.js
    |   |   |           FR.js
    |   |   |           GA.js
    |   |   |           GB.js
    |   |   |           GD.js
    |   |   |           GE.js
    |   |   |           GF.js
    |   |   |           GG.js
    |   |   |           GH.js
    |   |   |           GI.js
    |   |   |           GL.js
    |   |   |           GM.js
    |   |   |           GN.js
    |   |   |           GP.js
    |   |   |           GQ.js
    |   |   |           GR.js
    |   |   |           GT.js
    |   |   |           GU.js
    |   |   |           GW.js
    |   |   |           GY.js
    |   |   |           HK.js
    |   |   |           HN.js
    |   |   |           HR.js
    |   |   |           HT.js
    |   |   |           HU.js
    |   |   |           ID.js
    |   |   |           IE.js
    |   |   |           IL.js
    |   |   |           IM.js
    |   |   |           IN.js
    |   |   |           IQ.js
    |   |   |           IR.js
    |   |   |           IS.js
    |   |   |           IT.js
    |   |   |           JE.js
    |   |   |           JM.js
    |   |   |           JO.js
    |   |   |           JP.js
    |   |   |           KE.js
    |   |   |           KG.js
    |   |   |           KH.js
    |   |   |           KI.js
    |   |   |           KM.js
    |   |   |           KN.js
    |   |   |           KP.js
    |   |   |           KR.js
    |   |   |           KW.js
    |   |   |           KY.js
    |   |   |           KZ.js
    |   |   |           LA.js
    |   |   |           LB.js
    |   |   |           LC.js
    |   |   |           LI.js
    |   |   |           LK.js
    |   |   |           LR.js
    |   |   |           LS.js
    |   |   |           LT.js
    |   |   |           LU.js
    |   |   |           LV.js
    |   |   |           LY.js
    |   |   |           MA.js
    |   |   |           MC.js
    |   |   |           MD.js
    |   |   |           ME.js
    |   |   |           MG.js
    |   |   |           MH.js
    |   |   |           MK.js
    |   |   |           ML.js
    |   |   |           MM.js
    |   |   |           MN.js
    |   |   |           MO.js
    |   |   |           MP.js
    |   |   |           MQ.js
    |   |   |           MR.js
    |   |   |           MS.js
    |   |   |           MT.js
    |   |   |           MU.js
    |   |   |           MV.js
    |   |   |           MW.js
    |   |   |           MX.js
    |   |   |           MY.js
    |   |   |           MZ.js
    |   |   |           NA.js
    |   |   |           NC.js
    |   |   |           NE.js
    |   |   |           NF.js
    |   |   |           NG.js
    |   |   |           NI.js
    |   |   |           NL.js
    |   |   |           NO.js
    |   |   |           NP.js
    |   |   |           NR.js
    |   |   |           NU.js
    |   |   |           NZ.js
    |   |   |           OM.js
    |   |   |           PA.js
    |   |   |           PE.js
    |   |   |           PF.js
    |   |   |           PG.js
    |   |   |           PH.js
    |   |   |           PK.js
    |   |   |           PL.js
    |   |   |           PM.js
    |   |   |           PN.js
    |   |   |           PR.js
    |   |   |           PS.js
    |   |   |           PT.js
    |   |   |           PW.js
    |   |   |           PY.js
    |   |   |           QA.js
    |   |   |           RE.js
    |   |   |           RO.js
    |   |   |           RS.js
    |   |   |           RU.js
    |   |   |           RW.js
    |   |   |           SA.js
    |   |   |           SB.js
    |   |   |           SC.js
    |   |   |           SD.js
    |   |   |           SE.js
    |   |   |           SG.js
    |   |   |           SH.js
    |   |   |           SI.js
    |   |   |           SK.js
    |   |   |           SL.js
    |   |   |           SM.js
    |   |   |           SN.js
    |   |   |           SO.js
    |   |   |           SR.js
    |   |   |           ST.js
    |   |   |           SV.js
    |   |   |           SY.js
    |   |   |           SZ.js
    |   |   |           TC.js
    |   |   |           TD.js
    |   |   |           TG.js
    |   |   |           TH.js
    |   |   |           TJ.js
    |   |   |           TL.js
    |   |   |           TM.js
    |   |   |           TN.js
    |   |   |           TO.js
    |   |   |           TR.js
    |   |   |           TT.js
    |   |   |           TV.js
    |   |   |           TW.js
    |   |   |           TZ.js
    |   |   |           UA.js
    |   |   |           UG.js
    |   |   |           US.js
    |   |   |           UY.js
    |   |   |           UZ.js
    |   |   |           VA.js
    |   |   |           VC.js
    |   |   |           VE.js
    |   |   |           VG.js
    |   |   |           VI.js
    |   |   |           VN.js
    |   |   |           VU.js
    |   |   |           WF.js
    |   |   |           WS.js
    |   |   |           YE.js
    |   |   |           YT.js
    |   |   |           ZA.js
    |   |   |           ZM.js
    |   |   |           ZW.js
    |   |   |           
    |   |   \---dist
    |   |       +---lib
    |   |       |       statuses.js
    |   |       |       supported.js
    |   |       |       
    |   |       \---unpacker
    |   |               agents.js
    |   |               browsers.js
    |   |               browserVersions.js
    |   |               feature.js
    |   |               features.js
    |   |               index.js
    |   |               region.js
    |   |               
    |   +---combined-stream
    |   |   |   License
    |   |   |   package.json
    |   |   |   Readme.md
    |   |   |   yarn.lock
    |   |   |   
    |   |   \---lib
    |   |           combined_stream.js
    |   |           
    |   +---convert-source-map
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---debug
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---src
    |   |           browser.js
    |   |           common.js
    |   |           index.js
    |   |           node.js
    |   |           
    |   +---delayed-stream
    |   |   |   .npmignore
    |   |   |   License
    |   |   |   Makefile
    |   |   |   package.json
    |   |   |   Readme.md
    |   |   |   
    |   |   \---lib
    |   |           delayed_stream.js
    |   |           
    |   +---dunder-proto
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   get.d.ts
    |   |   |   get.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   set.d.ts
    |   |   |   set.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           get.js
    |   |           index.js
    |   |           set.js
    |   |           
    |   +---electron-to-chromium
    |   |       chromium-versions.js
    |   |       chromium-versions.json
    |   |       full-chromium-versions.js
    |   |       full-chromium-versions.json
    |   |       full-versions.js
    |   |       full-versions.json
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       versions.js
    |   |       versions.json
    |   |       
    |   +---es-define-property
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---es-errors
    |   |   |   .eslintrc
    |   |   |   CHANGELOG.md
    |   |   |   eval.d.ts
    |   |   |   eval.js
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   range.d.ts
    |   |   |   range.js
    |   |   |   README.md
    |   |   |   ref.d.ts
    |   |   |   ref.js
    |   |   |   syntax.d.ts
    |   |   |   syntax.js
    |   |   |   tsconfig.json
    |   |   |   type.d.ts
    |   |   |   type.js
    |   |   |   uri.d.ts
    |   |   |   uri.js
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---es-object-atoms
    |   |   |   .eslintrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   isObject.d.ts
    |   |   |   isObject.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   RequireObjectCoercible.d.ts
    |   |   |   RequireObjectCoercible.js
    |   |   |   ToObject.d.ts
    |   |   |   ToObject.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---es-set-tostringtag
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |   
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---esbuild
    |   |   |   install.js
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---bin
    |   |   |       esbuild
    |   |   |       
    |   |   \---lib
    |   |           main.d.ts
    |   |           main.js
    |   |           
    |   +---escalade
    |   |   |   index.d.mts
    |   |   |   index.d.ts
    |   |   |   license
    |   |   |   package.json
    |   |   |   readme.md
    |   |   |   
    |   |   +---dist
    |   |   |       index.js
    |   |   |       index.mjs
    |   |   |       
    |   |   \---sync
    |   |           index.d.mts
    |   |           index.d.ts
    |   |           index.js
    |   |           index.mjs
    |   |           
    |   +---follow-redirects
    |   |       debug.js
    |   |       http.js
    |   |       https.js
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---form-data
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   License
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---lib
    |   |           browser.js
    |   |           form_data.js
    |   |           populate.js
    |   |           
    |   +---function-bind
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   implementation.js
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       SECURITY.md
    |   |   |       
    |   |   \---test
    |   |           .eslintrc
    |   |           index.js
    |   |           
    |   +---gensync
    |   |   |   index.js
    |   |   |   index.js.flow
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---test
    |   |           .babelrc
    |   |           index.test.js
    |   |           
    |   +---get-intrinsic
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           GetIntrinsic.js
    |   |           
    |   +---get-proto
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   Object.getPrototypeOf.d.ts
    |   |   |   Object.getPrototypeOf.js
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   Reflect.getPrototypeOf.d.ts
    |   |   |   Reflect.getPrototypeOf.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---gopd
    |   |   |   .eslintrc
    |   |   |   CHANGELOG.md
    |   |   |   gOPD.d.ts
    |   |   |   gOPD.js
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---has-symbols
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   shams.d.ts
    |   |   |   shams.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |       |   index.js
    |   |       |   tests.js
    |   |       |   
    |   |       \---shams
    |   |               core-js.js
    |   |               get-own-property-symbols.js
    |   |               
    |   +---has-tostringtag
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   shams.d.ts
    |   |   |   shams.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |       |   index.js
    |   |       |   tests.js
    |   |       |   
    |   |       \---shams
    |   |               core-js.js
    |   |               get-own-property-symbols.js
    |   |               
    |   +---hasown
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |   
    |   |   \---.github
    |   |           FUNDING.yml
    |   |           
    |   +---js-tokens
    |   |       CHANGELOG.md
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---jsesc
    |   |   |   jsesc.js
    |   |   |   LICENSE-MIT.txt
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---bin
    |   |   |       jsesc
    |   |   |       
    |   |   \---man
    |   |           jsesc.1
    |   |           
    |   +---json5
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---dist
    |   |   |       index.js
    |   |   |       index.min.js
    |   |   |       index.min.mjs
    |   |   |       index.mjs
    |   |   |       
    |   |   \---lib
    |   |           cli.js
    |   |           index.d.ts
    |   |           index.js
    |   |           parse.d.ts
    |   |           parse.js
    |   |           register.js
    |   |           require.js
    |   |           stringify.d.ts
    |   |           stringify.js
    |   |           unicode.d.ts
    |   |           unicode.js
    |   |           util.d.ts
    |   |           util.js
    |   |           
    |   +---loose-envify
    |   |       cli.js
    |   |       custom.js
    |   |       index.js
    |   |       LICENSE
    |   |       loose-envify.js
    |   |       package.json
    |   |       README.md
    |   |       replace.js
    |   |       
    |   +---lru-cache
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---math-intrinsics
    |   |   |   .eslintrc
    |   |   |   abs.d.ts
    |   |   |   abs.js
    |   |   |   CHANGELOG.md
    |   |   |   floor.d.ts
    |   |   |   floor.js
    |   |   |   isFinite.d.ts
    |   |   |   isFinite.js
    |   |   |   isInteger.d.ts
    |   |   |   isInteger.js
    |   |   |   isNaN.d.ts
    |   |   |   isNaN.js
    |   |   |   isNegativeZero.d.ts
    |   |   |   isNegativeZero.js
    |   |   |   LICENSE
    |   |   |   max.d.ts
    |   |   |   max.js
    |   |   |   min.d.ts
    |   |   |   min.js
    |   |   |   mod.d.ts
    |   |   |   mod.js
    |   |   |   package.json
    |   |   |   pow.d.ts
    |   |   |   pow.js
    |   |   |   README.md
    |   |   |   round.d.ts
    |   |   |   round.js
    |   |   |   sign.d.ts
    |   |   |   sign.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   +---constants
    |   |   |       maxArrayLength.d.ts
    |   |   |       maxArrayLength.js
    |   |   |       maxSafeInteger.d.ts
    |   |   |       maxSafeInteger.js
    |   |   |       maxValue.d.ts
    |   |   |       maxValue.js
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---mime-db
    |   |       db.json
    |   |       HISTORY.md
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---mime-types
    |   |       HISTORY.md
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---ms
    |   |       index.js
    |   |       license.md
    |   |       package.json
    |   |       readme.md
    |   |       
    |   +---nanoid
    |   |   |   index.browser.cjs
    |   |   |   index.browser.js
    |   |   |   index.cjs
    |   |   |   index.d.cts
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   nanoid.js
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---async
    |   |   |       index.browser.cjs
    |   |   |       index.browser.js
    |   |   |       index.cjs
    |   |   |       index.d.ts
    |   |   |       index.js
    |   |   |       index.native.js
    |   |   |       package.json
    |   |   |       
    |   |   +---bin
    |   |   |       nanoid.cjs
    |   |   |       
    |   |   +---non-secure
    |   |   |       index.cjs
    |   |   |       index.d.ts
    |   |   |       index.js
    |   |   |       package.json
    |   |   |       
    |   |   \---url-alphabet
    |   |           index.cjs
    |   |           index.js
    |   |           package.json
    |   |           
    |   +---node-releases
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---data
    |   |       +---processed
    |   |       |       envs.json
    |   |       |       
    |   |       \---release-schedule
    |   |               release-schedule.json
    |   |               
    |   +---picocolors
    |   |       LICENSE
    |   |       package.json
    |   |       picocolors.browser.js
    |   |       picocolors.d.ts
    |   |       picocolors.js
    |   |       README.md
    |   |       types.d.ts
    |   |       
    |   +---postcss
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---lib
    |   |           at-rule.d.ts
    |   |           at-rule.js
    |   |           comment.d.ts
    |   |           comment.js
    |   |           container.d.ts
    |   |           container.js
    |   |           css-syntax-error.d.ts
    |   |           css-syntax-error.js
    |   |           declaration.d.ts
    |   |           declaration.js
    |   |           document.d.ts
    |   |           document.js
    |   |           fromJSON.d.ts
    |   |           fromJSON.js
    |   |           input.d.ts
    |   |           input.js
    |   |           lazy-result.d.ts
    |   |           lazy-result.js
    |   |           list.d.ts
    |   |           list.js
    |   |           map-generator.js
    |   |           no-work-result.d.ts
    |   |           no-work-result.js
    |   |           node.d.ts
    |   |           node.js
    |   |           parse.d.ts
    |   |           parse.js
    |   |           parser.js
    |   |           postcss.d.mts
    |   |           postcss.d.ts
    |   |           postcss.js
    |   |           postcss.mjs
    |   |           previous-map.d.ts
    |   |           previous-map.js
    |   |           processor.d.ts
    |   |           processor.js
    |   |           result.d.ts
    |   |           result.js
    |   |           root.d.ts
    |   |           root.js
    |   |           rule.d.ts
    |   |           rule.js
    |   |           stringifier.d.ts
    |   |           stringifier.js
    |   |           stringify.d.ts
    |   |           stringify.js
    |   |           symbols.js
    |   |           terminal-highlight.js
    |   |           tokenize.js
    |   |           warn-once.js
    |   |           warning.d.ts
    |   |           warning.js
    |   |           
    |   +---proxy-from-env
    |   |       .eslintrc
    |   |       .travis.yml
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       test.js
    |   |       
    |   +---react
    |   |   |   index.js
    |   |   |   jsx-dev-runtime.js
    |   |   |   jsx-runtime.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   react.shared-subset.js
    |   |   |   README.md
    |   |   |   
    |   |   +---cjs
    |   |   |       react-jsx-dev-runtime.development.js
    |   |   |       react-jsx-dev-runtime.production.min.js
    |   |   |       react-jsx-dev-runtime.profiling.min.js
    |   |   |       react-jsx-runtime.development.js
    |   |   |       react-jsx-runtime.production.min.js
    |   |   |       react-jsx-runtime.profiling.min.js
    |   |   |       react.development.js
    |   |   |       react.production.min.js
    |   |   |       react.shared-subset.development.js
    |   |   |       react.shared-subset.production.min.js
    |   |   |       
    |   |   \---umd
    |   |           react.development.js
    |   |           react.production.min.js
    |   |           react.profiling.min.js
    |   |           
    |   +---react-dom
    |   |   |   client.js
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   profiling.js
    |   |   |   README.md
    |   |   |   server.browser.js
    |   |   |   server.js
    |   |   |   server.node.js
    |   |   |   test-utils.js
    |   |   |   
    |   |   +---cjs
    |   |   |       react-dom-server-legacy.browser.development.js
    |   |   |       react-dom-server-legacy.browser.production.min.js
    |   |   |       react-dom-server-legacy.node.development.js
    |   |   |       react-dom-server-legacy.node.production.min.js
    |   |   |       react-dom-server.browser.development.js
    |   |   |       react-dom-server.browser.production.min.js
    |   |   |       react-dom-server.node.development.js
    |   |   |       react-dom-server.node.production.min.js
    |   |   |       react-dom-test-utils.development.js
    |   |   |       react-dom-test-utils.production.min.js
    |   |   |       react-dom.development.js
    |   |   |       react-dom.production.min.js
    |   |   |       react-dom.profiling.min.js
    |   |   |       
    |   |   \---umd
    |   |           react-dom-server-legacy.browser.development.js
    |   |           react-dom-server-legacy.browser.production.min.js
    |   |           react-dom-server.browser.development.js
    |   |           react-dom-server.browser.production.min.js
    |   |           react-dom-test-utils.development.js
    |   |           react-dom-test-utils.production.min.js
    |   |           react-dom.development.js
    |   |           react-dom.production.min.js
    |   |           react-dom.profiling.min.js
    |   |           
    |   +---react-refresh
    |   |   |   babel.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   runtime.js
    |   |   |   
    |   |   \---cjs
    |   |           react-refresh-babel.development.js
    |   |           react-refresh-babel.production.js
    |   |           react-refresh-runtime.development.js
    |   |           react-refresh-runtime.production.js
    |   |           
    |   +---react-router
    |   |   |   CHANGELOG.md
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---dist
    |   |       |   index.d.ts
    |   |       |   index.js
    |   |       |   index.js.map
    |   |       |   main.js
    |   |       |   react-router.development.js
    |   |       |   react-router.development.js.map
    |   |       |   react-router.production.min.js
    |   |       |   react-router.production.min.js.map
    |   |       |   
    |   |       +---lib
    |   |       |       components.d.ts
    |   |       |       context.d.ts
    |   |       |       deprecations.d.ts
    |   |       |       hooks.d.ts
    |   |       |       
    |   |       \---umd
    |   |               react-router.development.js
    |   |               react-router.development.js.map
    |   |               react-router.production.min.js
    |   |               react-router.production.min.js.map
    |   |               
    |   +---react-router-dom
    |   |   |   CHANGELOG.md
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   server.d.ts
    |   |   |   server.js
    |   |   |   server.mjs
    |   |   |   
    |   |   \---dist
    |   |       |   dom.d.ts
    |   |       |   index.d.ts
    |   |       |   index.js
    |   |       |   index.js.map
    |   |       |   main.js
    |   |       |   react-router-dom.development.js
    |   |       |   react-router-dom.development.js.map
    |   |       |   react-router-dom.production.min.js
    |   |       |   react-router-dom.production.min.js.map
    |   |       |   server.d.ts
    |   |       |   server.js
    |   |       |   server.mjs
    |   |       |   
    |   |       \---umd
    |   |               react-router-dom.development.js
    |   |               react-router-dom.development.js.map
    |   |               react-router-dom.production.min.js
    |   |               react-router-dom.production.min.js.map
    |   |               
    |   +---rollup
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---dist
    |   |       |   getLogFilter.d.ts
    |   |       |   getLogFilter.js
    |   |       |   loadConfigFile.d.ts
    |   |       |   loadConfigFile.js
    |   |       |   native.js
    |   |       |   parseAst.d.ts
    |   |       |   parseAst.js
    |   |       |   rollup.d.ts
    |   |       |   rollup.js
    |   |       |   
    |   |       +---bin
    |   |       |       rollup
    |   |       |       
    |   |       +---es
    |   |       |   |   getLogFilter.js
    |   |       |   |   package.json
    |   |       |   |   parseAst.js
    |   |       |   |   rollup.js
    |   |       |   |   
    |   |       |   \---shared
    |   |       |           node-entry.js
    |   |       |           parseAst.js
    |   |       |           watch.js
    |   |       |           
    |   |       \---shared
    |   |               fsevents-importer.js
    |   |               index.js
    |   |               loadConfigFile.js
    |   |               parseAst.js
    |   |               rollup.js
    |   |               watch-cli.js
    |   |               watch.js
    |   |               
    |   +---scheduler
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   unstable_mock.js
    |   |   |   unstable_post_task.js
    |   |   |   
    |   |   +---cjs
    |   |   |       scheduler-unstable_mock.development.js
    |   |   |       scheduler-unstable_mock.production.min.js
    |   |   |       scheduler-unstable_post_task.development.js
    |   |   |       scheduler-unstable_post_task.production.min.js
    |   |   |       scheduler.development.js
    |   |   |       scheduler.production.min.js
    |   |   |       
    |   |   \---umd
    |   |           scheduler-unstable_mock.development.js
    |   |           scheduler-unstable_mock.production.min.js
    |   |           scheduler.development.js
    |   |           scheduler.production.min.js
    |   |           scheduler.profiling.min.js
    |   |           
    |   +---semver
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   range.bnf
    |   |   |   README.md
    |   |   |   semver.js
    |   |   |   
    |   |   \---bin
    |   |           semver.js
    |   |           
    |   +---source-map-js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   source-map.d.ts
    |   |   |   source-map.js
    |   |   |   
    |   |   \---lib
    |   |           array-set.js
    |   |           base64-vlq.js
    |   |           base64.js
    |   |           binary-search.js
    |   |           mapping-list.js
    |   |           quick-sort.js
    |   |           source-map-consumer.d.ts
    |   |           source-map-consumer.js
    |   |           source-map-generator.d.ts
    |   |           source-map-generator.js
    |   |           source-node.d.ts
    |   |           source-node.js
    |   |           util.js
    |   |           
    |   +---update-browserslist-db
    |   |       check-npm-version.js
    |   |       cli.js
    |   |       index.d.ts
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       utils.js
    |   |       
    |   +---vite
    |   |   |   client.d.ts
    |   |   |   index.cjs
    |   |   |   index.d.cts
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---bin
    |   |   |       openChrome.applescript
    |   |   |       vite.js
    |   |   |       
    |   |   +---dist
    |   |   |   +---client
    |   |   |   |       client.mjs
    |   |   |   |       env.mjs
    |   |   |   |       
    |   |   |   +---node
    |   |   |   |   |   cli.js
    |   |   |   |   |   constants.js
    |   |   |   |   |   index.d.ts
    |   |   |   |   |   index.js
    |   |   |   |   |   runtime.d.ts
    |   |   |   |   |   runtime.js
    |   |   |   |   |   types.d-aGj9QkWt.d.ts
    |   |   |   |   |   
    |   |   |   |   \---chunks
    |   |   |   |           dep-D-7KCb9p.js
    |   |   |   |           dep-D_zLpgQd.js
    |   |   |   |           dep-e9kYborm.js
    |   |   |   |           dep-IQS-Za7F.js
    |   |   |   |           dep-YkMKzX4u.js
    |   |   |   |           
    |   |   |   \---node-cjs
    |   |   |           publicUtils.cjs
    |   |   |           
    |   |   \---types
    |   |           customEvent.d.ts
    |   |           hmrPayload.d.ts
    |   |           hot.d.ts
    |   |           import-meta.d.ts
    |   |           importGlob.d.ts
    |   |           importMeta.d.ts
    |   |           metadata.d.ts
    |   |           package.json
    |   |           
    |   \---yallist
    |           iterator.js
    |           LICENSE
    |           package.json
    |           README.md
    |           yallist.js
    |           
    \---src
        |   App.jsx
        |   dashboard.css
        |   layout-2col.css
        |   main.jsx
        |   preview.css
        |   projectview.css
        |   styles.css
        |   
        +---assets
        |   \---brand
        |           logo.png
        |           
        +---layouts
        |       ProjectTabsLayout.jsx
        |       
        +---lib
        |       api.js
        |       
        +---pages
        |       Characters.jsx
        |       Dashboard.jsx
        |       Preview.jsx
        |       ProjectView.jsx
        |       World.jsx
        |       
        \---ui
                AppHeader.jsx
                Editor.jsx
                ProjectNav.jsx
                
```

## Dateien

### `.vs\roman-writing-mvp\v17\DocumentLayout.backup.json`
```json
{
  "Version": 1,
  "WorkspaceRootPath": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\",
  "Documents": [
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\styles.css||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\styles.css||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\pages\\ProjectView.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\layout-2col.css||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\layout-2col.css||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\layouts\\ProjectTabsLayout.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\layouts\\ProjectTabsLayout.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\World.jsx||{8B382828-6202-11D1-8870-0000F87579D2}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\pages\\World.jsx||{8B382828-6202-11D1-8870-0000F87579D2}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Characters.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\pages\\Characters.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\projectview.css||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\main.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\main.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\App.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\App.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\AppHeader.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\ui\\AppHeader.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Preview.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\pages\\Preview.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\preview.css||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\preview.css||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\index.html||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\index.html||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\ProjectNav.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\ui\\ProjectNav.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\app.py||{8B382828-6202-11D1-8870-0000F87579D2}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:backend\\app.py||{8B382828-6202-11D1-8870-0000F87579D2}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\lib\\api.js||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\lib\\api.js||{3B902123-F8A7-4915-9F01-361F908088D0}"
    }
  ],
  "DocumentGroupContainers": [
    {
      "Orientation": 0,
      "VerticalTabListWidth": 256,
      "DocumentGroups": [
        {
          "DockedWidth": 200,
          "SelectedChildIndex": 9,
          "Children": [
            {
              "$type": "Document",
              "DocumentIndex": 2,
              "Title": "layout-2col.css",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\layout-2col.css",
              "RelativeDocumentMoniker": "frontend\\src\\layout-2col.css",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\layout-2col.css",
              "RelativeToolTip": "frontend\\src\\layout-2col.css",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAABYAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003000|",
              "WhenOpened": "2025-10-05T09:41:49.626Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 6,
              "Title": "projectview.css",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css",
              "RelativeDocumentMoniker": "frontend\\src\\projectview.css",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css",
              "RelativeToolTip": "frontend\\src\\projectview.css",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAABMAAAAKAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003000|",
              "WhenOpened": "2025-10-05T09:38:06.842Z"
            },
            {
              "$type": "Document",
              "DocumentIndex": 9,
              "Title": "AppHeader.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\AppHeader.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\ui\\AppHeader.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\AppHeader.jsx",
              "RelativeToolTip": "frontend\\src\\ui\\AppHeader.jsx",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-05T09:29:25.755Z"
            },
            {
              "$type": "Document",
              "DocumentIndex": 7,
              "Title": "main.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\main.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\main.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\main.jsx",
              "RelativeToolTip": "frontend\\src\\main.jsx",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-05T09:24:17.256Z"
            },
            {
              "$type": "Document",
              "DocumentIndex": 3,
              "Title": "ProjectTabsLayout.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\layouts\\ProjectTabsLayout.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\layouts\\ProjectTabsLayout.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\layouts\\ProjectTabsLayout.jsx",
              "RelativeToolTip": "frontend\\src\\layouts\\ProjectTabsLayout.jsx",
              "ViewState": "AgIAADIAAAAAAAAAAAAiwGYAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-05T09:19:41.849Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 11,
              "Title": "preview.css",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\preview.css",
              "RelativeDocumentMoniker": "frontend\\src\\preview.css",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\preview.css",
              "RelativeToolTip": "frontend\\src\\preview.css",
              "ViewState": "AgIAAAEAAAAAAAAAAAAAwDMAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003000|",
              "WhenOpened": "2025-10-04T22:28:28.176Z"
            },
            {
              "$type": "Document",
              "DocumentIndex": 8,
              "Title": "App.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\App.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\App.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\App.jsx",
              "RelativeToolTip": "frontend\\src\\App.jsx",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAABoAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-04T22:05:23.988Z"
            },
            {
              "$type": "Document",
              "DocumentIndex": 4,
              "Title": "World.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\World.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\pages\\World.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\World.jsx",
              "RelativeToolTip": "frontend\\src\\pages\\World.jsx",
              "ViewState": "AgIAAFYAAAAAAAAAAAAiwIoAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-04T22:04:55.292Z"
            },
            {
              "$type": "Document",
              "DocumentIndex": 5,
              "Title": "Characters.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Characters.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\pages\\Characters.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Characters.jsx",
              "RelativeToolTip": "frontend\\src\\pages\\Characters.jsx",
              "ViewState": "AgIAAF0AAAAAAAAAAAAiwJEAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-04T22:04:25.146Z"
            },
            {
              "$type": "Document",
              "DocumentIndex": 0,
              "Title": "styles.css",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\styles.css",
              "RelativeDocumentMoniker": "frontend\\src\\styles.css",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\styles.css",
              "RelativeToolTip": "frontend\\src\\styles.css",
              "ViewState": "AgIAAH0AAAAAAAAAAAAiwLEAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003000|",
              "WhenOpened": "2025-10-04T21:49:52.179Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 1,
              "Title": "ProjectView.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\pages\\ProjectView.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx",
              "RelativeToolTip": "frontend\\src\\pages\\ProjectView.jsx",
              "ViewState": "AgIAAGwBAAAAAAAAAAAiwKABAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-04T17:59:01.023Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 13,
              "Title": "ProjectNav.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\ProjectNav.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\ui\\ProjectNav.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\ProjectNav.jsx",
              "RelativeToolTip": "frontend\\src\\ui\\ProjectNav.jsx",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAAsAAAAzAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-04T22:04:01.252Z"
            },
            {
              "$type": "Document",
              "DocumentIndex": 15,
              "Title": "api.js",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\lib\\api.js",
              "RelativeDocumentMoniker": "frontend\\src\\lib\\api.js",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\lib\\api.js",
              "RelativeToolTip": "frontend\\src\\lib\\api.js",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAACYAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.001646|",
              "WhenOpened": "2025-10-04T18:18:54.008Z"
            },
            {
              "$type": "Document",
              "DocumentIndex": 14,
              "Title": "app.py",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\app.py",
              "RelativeDocumentMoniker": "backend\\app.py",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\app.py",
              "RelativeToolTip": "backend\\app.py",
              "ViewState": "AgIAAFcBAAAAAAAAAAAiwGsBAAAAAAAAAAAAAA==",
              "Icon": "00000000-0000-0000-0000-000000000000.000000|iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHfSURBVDhPpZCxaxNhGMZ/9zVJaUuDUlq1FBWLZBFTCXo4BFyU1qGKi4OkIHhkzF/g0KF00M2lR9YUdDDQQVAcJILoQUd1UNRmkhoRm8RL777v7nOoCZd4AcEH3uF5nvd73vd74X\u002BgtTai3LIsHeWDEEJct217a1DvwbIs7bpubFUqFW3b9naxWLwWfSOipAvHcfqqi0KhkMtms3cty1rsaomeG4FpmoMSANVqlXQ6nQMWgacMC4hOBchduEj\u002ByjKjScGh8SS1Wq3nxQZEN3j1eY/Vrfe8rTeQvsf89ARLS1cz5XIZ/uUGXxptQiVRUhJIybudXaZn52a7vbEBpmkyNb/A69YM9W8tDEJOTI2hpI\u002BSkvOZH2f13sNAB\u002B07sV9wHIdH9Unquz9RvoeUPtL3UFISKkky\u002BAT7HwTi6FpsgGma3N9\u002Bg5I\u002BKaFZyU8wOpJChwHnjiuE9wKCXyC/zsQGOI7DeELjtiUPbgky6Wd/HA3KBelC4AIpNfQGl88cQ0mfI5PugRhKkM2DUk0INYwtPI/dAGAlf4rbl06T6DyBVgeCABJzYPhwcm0V8ICNvwJKpVIf37h3IxSyKVAuBMDIYQAMw1jvaxwGrYNl3Xq5o79vat3Y3Nedj4\u002B11je7/m\u002BXOuyzFtDhUgAAAABJRU5ErkJggg==",
              "WhenOpened": "2025-10-04T18:08:50.334Z"
            },
            {
              "$type": "Document",
              "DocumentIndex": 12,
              "Title": "index.html",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\index.html",
              "RelativeDocumentMoniker": "frontend\\index.html",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\index.html",
              "RelativeToolTip": "frontend\\index.html",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.001512|",
              "WhenOpened": "2025-10-04T22:28:44.643Z"
            },
            {
              "$type": "Document",
              "DocumentIndex": 10,
              "Title": "Preview.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Preview.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\pages\\Preview.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Preview.jsx",
              "RelativeToolTip": "frontend\\src\\pages\\Preview.jsx",
              "ViewState": "AgIAAIIAAAAAAAAAAAAswKMAAAAFAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-04T22:29:28.717Z"
            }
          ]
        }
      ]
    }
  ]
}
```

### `.vs\roman-writing-mvp\v17\DocumentLayout.json`
```json
{
  "Version": 1,
  "WorkspaceRootPath": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\",
  "Documents": [
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\projectview.css||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\pages\\ProjectView.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\Editor.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\ui\\Editor.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    }
  ],
  "DocumentGroupContainers": [
    {
      "Orientation": 0,
      "VerticalTabListWidth": 256,
      "DocumentGroups": [
        {
          "DockedWidth": 200,
          "SelectedChildIndex": 0,
          "Children": [
            {
              "$type": "Document",
              "DocumentIndex": 0,
              "Title": "projectview.css",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css",
              "RelativeDocumentMoniker": "frontend\\src\\projectview.css",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css",
              "RelativeToolTip": "frontend\\src\\projectview.css",
              "ViewState": "AgIAAFgAAAAAAAAAAAAiwF4AAAA3AAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003000|",
              "WhenOpened": "2025-10-05T20:57:40.782Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 2,
              "Title": "Editor.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\Editor.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\ui\\Editor.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\Editor.jsx",
              "RelativeToolTip": "frontend\\src\\ui\\Editor.jsx",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-05T20:33:49.797Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 1,
              "Title": "ProjectView.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\pages\\ProjectView.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx",
              "RelativeToolTip": "frontend\\src\\pages\\ProjectView.jsx",
              "ViewState": "AgIAAI0BAAAAAAAAAAAiwKEBAAAYAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-05T20:33:19.182Z",
              "EditorCaption": ""
            }
          ]
        }
      ]
    }
  ]
}
```

### `.vs\VSWorkspaceState.json`
```json
{
  "ExpandedNodes": [
    "",
    "\\backend",
    "\\frontend",
    "\\frontend\\src",
    "\\frontend\\src\\layouts",
    "\\frontend\\src\\lib",
    "\\frontend\\src\\pages",
    "\\frontend\\src\\ui"
  ],
  "SelectedNode": "\\frontend\\src\\styles.css",
  "PreviewInSolutionExplorer": false
}
```

### `backend\app.py`
```python
from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
from sqlalchemy.orm import selectinload
from datetime import datetime
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# SQLite config
db_path = os.path.join(os.path.dirname(__file__), "app.db")
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_path}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# -----------------
# Models
# -----------------
class Project(db.Model):
    __tablename__ = "projects"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, default="")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    chapters = db.relationship(
        "Chapter", backref="project", cascade="all, delete-orphan", lazy="selectin"
    )
    characters = db.relationship(
        "Character", backref="project", cascade="all, delete-orphan", lazy="selectin"
    )
    locations = db.relationship(
        "Location", backref="project", cascade="all, delete-orphan", lazy="selectin"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }


class Chapter(db.Model):
    __tablename__ = "chapters"
    __table_args__ = (
        db.Index("ix_chapter_project_order", "project_id", "order_index"),
    )
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    title = db.Column(db.String(255), nullable=False, default="Neues Kapitel")
    order_index = db.Column(db.Integer, default=0)
    content = db.Column(db.Text, default="")
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    scenes = db.relationship(
        "Scene", backref="chapter", cascade="all, delete-orphan", lazy="selectin"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "project_id": self.project_id,
            "title": self.title,
            "order_index": self.order_index,
            "content": self.content,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }


class Scene(db.Model):
    __tablename__ = "scenes"
    __table_args__ = (
        db.Index("ix_scene_chapter_order", "chapter_id", "order_index"),
    )
    id = db.Column(db.Integer, primary_key=True)
    chapter_id = db.Column(db.Integer, db.ForeignKey("chapters.id"), nullable=False)
    title = db.Column(db.String(255), nullable=False, default="Neue Szene")
    order_index = db.Column(db.Integer, default=0)
    content = db.Column(db.Text, default="")
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "chapter_id": self.chapter_id,
            "title": self.title,
            "order_index": self.order_index,
            "content": self.content,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }


class Character(db.Model):
    __tablename__ = "characters"
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(255), default="")
    age = db.Column(db.String(50), default="")  # flexibles Textfeld
    description = db.Column(db.Text, default="")

    def to_dict(self):
        return {
            "id": self.id,
            "project_id": self.project_id,
            "name": self.name,
            "role": self.role,
            "age": self.age,
            "description": self.description,
        }


class Location(db.Model):
    __tablename__ = "locations"
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    region = db.Column(db.String(255), default="")
    description = db.Column(db.Text, default="")

    def to_dict(self):
        return {
            "id": self.id,
            "project_id": self.project_id,
            "name": self.name,
            "region": self.region,
            "description": self.description,
        }


# -----------------
# Error & helpers
# -----------------
@app.errorhandler(404)
def _404(e):
    return jsonify({"error": str(e)}), 404

@app.errorhandler(400)
def _400(e):
    return jsonify({"error": "Bad Request", "detail": str(e)}), 400

def get_or_404(model, id_):
    item = db.session.get(model, id_)
    if not item:
        abort(404, description=f"{model.__name__} not found")
    return item

def next_order_index_for(model, **filters):
    """Gibt den nächsten order_index für eine Gruppe zurück (Kapitel im Projekt / Szenen im Kapitel)."""
    q = db.session.query(func.coalesce(func.max(model.order_index), -1))
    for k, v in filters.items():
        q = q.filter(getattr(model, k) == v)
    return q.scalar() + 1


# -----------------
# API
# -----------------
@app.route("/api/health", methods=["GET"])
def health():
    return {"status": "ok", "time": datetime.utcnow().isoformat()}

# Projects
@app.route("/api/projects", methods=["GET", "POST"])
def projects():
    if request.method == "POST":
        data = request.get_json() or {}
        p = Project(
            title=data.get("title", "Neues Projekt"),
            description=data.get("description", ""),
        )
        db.session.add(p)
        db.session.commit()
        return jsonify(p.to_dict()), 201

    items = Project.query.order_by(Project.updated_at.desc()).all()
    return jsonify([x.to_dict() for x in items])

@app.route("/api/projects/<int:pid>", methods=["GET", "PUT", "DELETE"])
def project_detail(pid):
    p = get_or_404(Project, pid)

    if request.method == "GET":
        data = p.to_dict()
        chapters = (
            Chapter.query.filter_by(project_id=pid)
            .order_by(Chapter.order_index.asc(), Chapter.id.asc())
            .all()
        )
        data["chapters"] = [
            {"id": c.id, "title": c.title, "order_index": c.order_index} for c in chapters
        ]
        return jsonify(data)

    if request.method == "PUT":
        data = request.get_json() or {}
        p.title = data.get("title", p.title)
        p.description = data.get("description", p.description)
        db.session.commit()
        return jsonify(p.to_dict())

    # DELETE
    db.session.delete(p)
    db.session.commit()
    return jsonify({"ok": True})

# Chapters
@app.route("/api/projects/<int:pid>/chapters", methods=["GET", "POST"])
def project_chapters(pid):
    get_or_404(Project, pid)  # existiert?

    if request.method == "POST":
        data = request.get_json() or {}
        c = Chapter(
            project_id=pid,
            title=data.get("title", "Neues Kapitel"),
            order_index=data.get("order_index", next_order_index_for(Chapter, project_id=pid)),
            content=data.get("content", ""),
        )
        db.session.add(c)
        db.session.commit()
        return jsonify(c.to_dict()), 201

    items = (
        Chapter.query.filter_by(project_id=pid)
        .order_by(Chapter.order_index.asc(), Chapter.id.asc())
        .all()
    )
    return jsonify([x.to_dict() for x in items])

@app.route("/api/chapters/<int:cid>", methods=["GET", "PUT", "DELETE"])
def chapter_detail(cid):
    c = get_or_404(Chapter, cid)

    if request.method == "GET":
        return jsonify(c.to_dict())

    if request.method == "PUT":
        data = request.get_json() or {}
        c.title = data.get("title", c.title)
        c.order_index = data.get("order_index", c.order_index)
        c.content = data.get("content", c.content)
        db.session.commit()
        return jsonify(c.to_dict())

    db.session.delete(c)
    db.session.commit()
    return jsonify({"ok": True})

# Scenes
@app.route("/api/chapters/<int:cid>/scenes", methods=["GET", "POST"])
def chapter_scenes(cid):
    get_or_404(Chapter, cid)

    if request.method == "POST":
        data = request.get_json() or {}
        sc = Scene(
            chapter_id=cid,
            title=data.get("title", "Neue Szene"),
            order_index=data.get("order_index", next_order_index_for(Scene, chapter_id=cid)),
            content=data.get("content", ""),
        )
        db.session.add(sc)
        db.session.commit()
        return jsonify(sc.to_dict()), 201

    items = (
        Scene.query.filter_by(chapter_id=cid)
        .order_by(Scene.order_index.asc(), Scene.id.asc())
        .all()
    )
    return jsonify([x.to_dict() for x in items])

@app.route("/api/scenes/<int:sid>", methods=["GET", "PUT", "DELETE"])
def scene_detail(sid):
    sc = get_or_404(Scene, sid)

    if request.method == "GET":
        return jsonify(sc.to_dict())

    if request.method == "PUT":
        data = request.get_json() or {}
        sc.title = data.get("title", sc.title)
        sc.order_index = data.get("order_index", sc.order_index)
        sc.content = data.get("content", sc.content)
        db.session.commit()
        return jsonify(sc.to_dict())

    db.session.delete(sc)
    db.session.commit()
    return jsonify({"ok": True})

# Characters
@app.route("/api/projects/<int:pid>/characters", methods=["GET", "POST"])
def project_characters(pid):
    get_or_404(Project, pid)

    if request.method == "POST":
        data = request.get_json() or {}
        ch = Character(
            project_id=pid,
            name=data.get("name", "Neue Figur"),
            role=data.get("role", ""),
            age=data.get("age", ""),
            description=data.get("description", ""),
        )
        db.session.add(ch)
        db.session.commit()
        return jsonify(ch.to_dict()), 201

    items = Character.query.filter_by(project_id=pid).all()
    return jsonify([x.to_dict() for x in items])

@app.route("/api/characters/<int:cid>", methods=["GET", "PUT", "DELETE"])
def character_detail(cid):
    ch = get_or_404(Character, cid)

    if request.method == "GET":
        return jsonify(ch.to_dict())

    if request.method == "PUT":
        data = request.get_json() or {}
        ch.name = data.get("name", ch.name)
        ch.role = data.get("role", ch.role)
        ch.age = data.get("age", ch.age)
        ch.description = data.get("description", ch.description)
        db.session.commit()
        return jsonify(ch.to_dict())

    db.session.delete(ch)
    db.session.commit()
    return jsonify({"ok": True})

# Locations
@app.route("/api/projects/<int:pid>/locations", methods=["GET", "POST"])
def project_locations(pid):
    get_or_404(Project, pid)

    if request.method == "POST":
        data = request.get_json() or {}
        loc = Location(
            project_id=pid,
            name=data.get("name", "Neuer Ort"),
            region=data.get("region", ""),
            description=data.get("description", ""),
        )
        db.session.add(loc)
        db.session.commit()
        return jsonify(loc.to_dict()), 201

    items = Location.query.filter_by(project_id=pid).all()
    return jsonify([x.to_dict() for x in items])

@app.route("/api/locations/<int:lid>", methods=["GET", "PUT", "DELETE"])
def location_detail(lid):
    loc = get_or_404(Location, lid)

    if request.method == "GET":
        return jsonify(loc.to_dict())

    if request.method == "PUT":
        data = request.get_json() or {}
        loc.name = data.get("name", loc.name)
        loc.region = data.get("region", loc.region)
        loc.description = data.get("description", loc.description)
        db.session.commit()
        return jsonify(loc.to_dict())

    db.session.delete(loc)
    db.session.commit()
    return jsonify({"ok": True})

# Buchstruktur: Projekt > Kapitel > Szenen (alles sortiert, ohne N+1)
@app.route("/api/projects/<int:pid>/book", methods=["GET"])
def project_book(pid):
    p = get_or_404(Project, pid)
    chapters = (
        Chapter.query.options(selectinload(Chapter.scenes))
        .filter_by(project_id=pid)
        .order_by(Chapter.order_index.asc(), Chapter.id.asc())
        .all()
    )
    data = [
        {
            "id": c.id,
            "title": c.title,
            "order_index": c.order_index,
            "scenes": [
                {
                    "id": s.id,
                    "title": s.title,
                    "order_index": s.order_index,
                    "content": s.content or "",
                }
                for s in sorted(c.scenes, key=lambda s: (s.order_index, s.id))
            ],
        }
        for c in chapters
    ]
    return jsonify({"project": p.to_dict(), "chapters": data})

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(host="127.0.0.1", port=5000, debug=True)

```

### `backend\README.md`
```markdown
# Backend (Flask)

## Setup (Windows PowerShell)
```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
- API läuft unter: http://127.0.0.1:5000
- Healthcheck: `GET /api/health`

### Nützliche Endpunkte
- `GET /api/projects` – Liste Projekte
- `POST /api/projects` – Neues Projekt `{ "title": "Mein Roman", "description": "..." }`
- `GET/PUT/DELETE /api/projects/:id`
- `GET/POST /api/projects/:id/chapters`
- `GET/PUT/DELETE /api/chapters/:id`
- `GET/POST /api/projects/:id/characters`
- `GET/PUT/DELETE /api/characters/:id`
- `GET/POST /api/projects/:id/locations`
- `GET/PUT/DELETE /api/locations/:id`

```

### `backend\requirements.txt`
```text
flask==3.0.3
flask-cors==4.0.1
flask-sqlalchemy==3.1.1
sqlalchemy==2.0.31

```

### `code-snapshot.md`
_Datei groesser als 150 KB, ausgelassen._

### `frontend\index.html`
```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Crimson+Pro:wght@400;600&display=swap" rel="stylesheet">
    <title>Roman Writing MVP</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

### `frontend\package.json`
```json
{
  "name": "roman-writing-mvp",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.7.7",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.3",
    "vite": "^5.4.10"
  }
}

```

### `frontend\README.md`
```markdown
# Frontend (Vite + React)

## Setup (Windows PowerShell)
```powershell
cd frontend
npm install
npm run dev
```
- App läuft unter: http://127.0.0.1:5173
- API-Proxy ist konfiguriert: Anfragen an `/api` gehen an `http://127.0.0.1:5000`

### Seiten
- **/** – Dashboard (Projekte erstellen & öffnen)
- **/project/:id** – Projektansicht (Kapitel-Sidebar + Editor)

### Dateien
- `src/pages/Dashboard.jsx` – Projektliste
- `src/pages/ProjectView.jsx` – Kapitelverwaltung & Editor
- `src/ui/Editor.jsx` – Einfacher Texteditor (Textarea, mit Autosave)
- `src/lib/api.js` – Axios-Client

```

### `frontend\src\App.jsx`
```jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard.jsx'
import ProjectTabsLayout from './layouts/ProjectTabsLayout.jsx'
import ProjectView from './pages/ProjectView.jsx'
import Characters from './pages/Characters.jsx'
import World from './pages/World.jsx'
import Preview from './pages/Preview.jsx'

import './styles.css'
import './layout-2col.css'
// optional � nur falls vorhanden:
import './projectview.css'
import './dashboard.css'

export default function App() {
  return (
    <Routes>
      {/* Startseite */}
      <Route path="/" element={<Dashboard />} />

      {/* Projektbereich mit Tabs */}
      <Route path="/project/:id" element={<ProjectTabsLayout />}>
        <Route index element={<ProjectView />} />
        <Route path="characters" element={<Characters />} />
        <Route path="world" element={<World />} />
        <Route path="preview" element={<Preview />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

```

### `frontend\src\dashboard.css`
```css
/* ==== Dashboard (nur hier g�ltig, via .dashboard wrapper) ==== */

/* Grid der Projektkacheln */
.dashboard .proj-grid{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap:20px;
}

/* Kachel: zweispaltig (Cover links, Inhalt rechts) */
.dashboard .proj-card{
  background:#fff;
  border:1px solid rgba(0,0,0,.06);
  border-radius:12px;
  box-shadow: 0 6px 18px -10px rgba(0,0,0,.2);
  padding:12px;
  display:grid;
  grid-template-columns: 160px 1fr;
  gap:16px;
  align-items:start;
}

/* Cover 2:3 */
.dashboard .cover{
  -webkit-appearance:none; appearance:none;
  width:160px; aspect-ratio: 2 / 3;
  border:1px solid rgba(0,0,0,.08);
  border-radius:10px;
  background: linear-gradient(135deg, #eef2ff 0%, #f6f8ff 100%);
  display:block; padding:0; cursor:pointer;
  box-shadow: inset 0 0 0 2px rgba(59,91,253,.06);
}
.dashboard .cover:hover{ box-shadow: inset 0 0 0 2px rgba(59,91,253,.2); }
.dashboard .cover-inner{
  width:100%; height:100%;
  display:flex; align-items:center; justify-content:center;
  color:#3b5bfd; font-weight:700; opacity:.9; letter-spacing:.05em;
}

/* Inhalt rechts � sauber ausrichten */
.dashboard .proj-meta{
  min-width: 0; /* f�r ellipsis */
  display:flex; flex-direction:column; height:100%;
}
.dashboard .proj-header{
  display:flex; align-items:center; gap:10px; margin-bottom:4px;
}
.dashboard .proj-title{
  margin:0; font-size:18px; font-weight:700;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  flex:1 1 auto;
}
.dashboard .icon-btn.rename{
  border:0; background:transparent; cursor:pointer;
  padding:6px 8px; border-radius:8px; line-height:1;
}
.dashboard .icon-btn.rename:hover{ background:rgba(0,0,0,.06); }

/* Meta & Aktionen */
.dashboard .proj-sub{ color:#64748b; font-size:13px; margin-bottom:10px; }
.dashboard .proj-actions{ margin-top:auto; display:flex; gap:8px; }

/* Eingabefeld beim Umbenennen */
.dashboard .title-input{
  width:100%;
  padding:8px 10px; border-radius:8px; border:1px solid rgba(0,0,0,.12);
  font-size:16px; font-weight:600;
}

/* Leerer Zustand */
.dashboard .empty-hint{
  grid-column: 1 / -1; padding:24px 0; text-align:center; opacity:.8;
}

```

### `frontend\src\layout-2col.css`
```css
/* Zwei-Spalten-Layout innerhalb der Seiten (links Liste, rechts Inhalt) */
.two-col{
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 20px;
  align-items: start;
}

.two-col__sidebar{
  position: sticky;
  top: var(--sticky-offset);  /* nur Topnav */
  max-height: calc(100vh - var(--sticky-offset) - 24px);
  overflow: auto;
  padding-right: 4px;
}

.two-col__main{ min-width: 0; }

@media (max-width: 980px){
  .two-col{ grid-template-columns: 1fr; }
  .two-col__sidebar{ position: static; max-height: none; overflow: visible; }
}

```

### `frontend\src\layouts\ProjectTabsLayout.jsx`
```jsx
import React from 'react'
import { NavLink, Outlet, useParams, Navigate, Link } from 'react-router-dom'
import logo from '../assets/brand/logo.png' // dein 380×140 Logo

export default function ProjectTabsLayout() {
  const { id } = useParams()
  if (!id) return <Navigate to="/" replace />

  const LinkItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
    >
      <span>{label}</span>
      <span className="active-bar" />
    </NavLink>
  )

  const base = `/project/${id}`

  return (
    <>
      {/* TOP NAV */}
      <header className="topnav">
        <div className="topnav-inner">
          <div className="nav-left">
            {/* BRAND: nur Logo; Größe proportional, ohne runde Ecken */}
            <Link
              to="/"
              className="brand"
              aria-label="Roman"
              style={{ display:'inline-flex', alignItems:'center', padding:0, borderRadius:0, marginRight:12 }}
            >
              <img
                src={logo}
                alt="Roman"
                style={{ height:22, width:'auto', display:'block', borderRadius:0 }}
              />
            </Link>

            <nav className="nav-links">
              <LinkItem to={base} label="Schreiben" />
              <LinkItem to={`${base}/characters`} label="Charaktere" />
              <LinkItem to={`${base}/world`} label="Welt" />
              <LinkItem to={`${base}/preview`} label="Vorschau" />
            </nav>
          </div>

          <div className="nav-right">
            <div className="nav-search">
              <input placeholder="Suchen…" />
            </div>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <Outlet />
    </>
  )
}

```

### `frontend\src\lib\api.js`
```javascript
import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
})

// Optional: schlichtes Error-Logging zentral
api.interceptors.response.use(
  r => r,
  err => {
    console.error('API error:', err?.response?.status, err?.response?.data)
    return Promise.reject(err)
  }
)

// Projects
export const listProjects   = () => api.get('/projects').then(r => r.data)
export const createProject  = (payload) => api.post('/projects', payload).then(r => r.data)
export const getProject     = (id) => api.get(`/projects/${id}`).then(r => r.data)
export const updateProject  = (id, payload) => api.put(`/projects/${id}`, payload).then(r => r.data)
export const deleteProject  = (id) => api.delete(`/projects/${id}`).then(r => r.data)

// Chapters
export const listChapters   = (pid) => api.get(`/projects/${pid}/chapters`).then(r => r.data)
export const createChapter  = (pid, payload) => api.post(`/projects/${pid}/chapters`, payload).then(r => r.data)
export const getChapter     = (id) => api.get(`/chapters/${id}`).then(r => r.data)
export const updateChapter  = (id, payload) => api.put(`/chapters/${id}`, payload).then(r => r.data)
export const deleteChapter  = (id) => api.delete(`/chapters/${id}`).then(r => r.data)

// Scenes
export const listScenes     = (chapterId) => api.get(`/chapters/${chapterId}/scenes`).then(r => r.data)
export const createScene    = (chapterId, payload) => api.post(`/chapters/${chapterId}/scenes`, payload).then(r => r.data)
export const getScene       = (id) => api.get(`/scenes/${id}`).then(r => r.data)
export const updateScene    = (id, payload) => api.put(`/scenes/${id}`, payload).then(r => r.data)
export const deleteScene    = (id) => api.delete(`/scenes/${id}`).then(r => r.data)

// Characters
export const listCharacters = (pid) => api.get(`/projects/${pid}/characters`).then(r => r.data)
export const createCharacter= (pid, payload) => api.post(`/projects/${pid}/characters`, payload).then(r => r.data)
export const getCharacter   = (id) => api.get(`/characters/${id}`).then(r => r.data)
export const updateCharacter= (id, payload) => api.put(`/characters/${id}`, payload).then(r => r.data)
export const deleteCharacter= (id) => api.delete(`/characters/${id}`).then(r => r.data)

// Locations
export const listLocations  = (pid) => api.get(`/projects/${pid}/locations`).then(r => r.data)
export const createLocation = (pid, payload) => api.post(`/projects/${pid}/locations`, payload).then(r => r.data)
export const getLocation    = (id) => api.get(`/locations/${id}`).then(r => r.data)
export const updateLocation = (id, payload) => api.put(`/locations/${id}`, payload).then(r => r.data)
export const deleteLocation = (id) => api.delete(`/locations/${id}`).then(r => r.data)

export default api

```

### `frontend\src\main.jsx`
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

```

### `frontend\src\pages\Characters.jsx`
```jsx
import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { getProject, listCharacters, createCharacter, updateCharacter, deleteCharacter } from '../lib/api.js'
import '../layout-2col.css'

export default function Characters() {
  const { id } = useParams()
  const pid = Number(id)

  const [project, setProject]   = useState(null)
  const [list, setList]         = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')

  const [activeId, setActiveId] = useState(null)

  const [name, setName]             = useState('')
  const [role, setRole]             = useState('')
  const [age, setAge]               = useState('')
  const [description, setDesc]      = useState('')

  const saveRef = useRef(null)
  const debounce = useCallback((fn, ms = 600) => {
    clearTimeout(saveRef.current)
    saveRef.current = setTimeout(fn, ms)
  }, [])

  const active = useMemo(() => list.find(c => c.id === activeId) || null, [list, activeId])

  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const p = await getProject(pid)
        setProject({ id: p.id, title: p.title })
        const data = await listCharacters(pid) // [{id,name,role,age,description}]
        setList(data)
        if (data[0]) {
          const first = data[0]
          setActiveId(first.id)
          setName(first.name || '')
          setRole(first.role || '')
          setAge(String(first.age ?? ''))
          setDesc(first.description || '')
        }
      } catch (e) {
        console.error(e); setError('Charaktere konnten nicht geladen werden.')
      } finally {
        setLoading(false)
      }
    })()
  }, [pid])

  useEffect(() => {
    if (!active) return
    setName(active.name || '')
    setRole(active.role || '')
    setAge(String(active.age ?? ''))
    setDesc(active.description || '')
  }, [activeId]) // eslint-disable-line

  async function addCharacter() {
    try {
      const c = await createCharacter(pid, { name:'Neuer Charakter', role:'', age:null, description:'' })
      setList(prev => [...prev, c])
      setActiveId(c.id)
    } catch (e) {
      alert('Anlegen fehlgeschlagen.')
    }
  }

  async function removeCharacter(cid) {
    if (!confirm('Charakter wirklich löschen?')) return
    try {
      await deleteCharacter(cid)
      setList(prev => prev.filter(c => c.id !== cid))
      if (activeId === cid) {
        const first = list.find(c => c.id !== cid)
        setActiveId(first?.id || null)
      }
    } catch (e) {
      alert('Löschen fehlgeschlagen.')
    }
  }

  function onChangeField(field, value) {
    if (field === 'name')        setName(value)
    if (field === 'role')        setRole(value)
    if (field === 'age')         setAge(value)
    if (field === 'description') setDesc(value)

    setList(prev => prev.map(c =>
      c.id === activeId ? { ...c, [field]: field==='age' ? Number(value || 0) : value } : c
    ))

    debounce(async () => {
      try {
        await updateCharacter(activeId, {
          name, role, age: Number(age || 0), description,
          [field]: field==='age' ? Number(value || 0) : value
        })
      } catch (e) {
        console.error(e)
      }
    })
  }

  if (loading) return <main className="content"><p>Lade…</p></main>
  return (
    <main className="content">
      {error && <p style={{color:'crimson', marginTop:0}}>{error}</p>}

      <div className="two-col">
        {/* LEFT: Liste */}
        <aside className="two-col__sidebar">
          <div className="panel">
            <div className="panel-title row">
              <span>Charaktere</span>
              <button className="btn sm" onClick={addCharacter}>+ Neu</button>
            </div>

            <ul className="klist">
              {list.map(c => (
                <li key={c.id} className="kitem">
                  <div
                    className={'krow ' + (activeId === c.id ? 'active' : '')}
                    onClick={() => setActiveId(c.id)}
                  >
                    <input
                      className="kinput"
                      value={c.name || ''}
                      onChange={e => onChangeField('name', e.target.value)}
                    />
                    <div className="kactions">
                      <button className="icon-btn" title="Löschen"
                              onClick={(ev)=>{ev.stopPropagation(); removeCharacter(c.id)}}>🗑</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* RIGHT: Details */}
        <section className="two-col__main">
          <h3 style={{margin:'4px 0 8px 0'}}>{project?.title}</h3>

          <div className="row" style={{gap:8}}>
            <input className="input" style={{flex:1}} placeholder="Name"
                   value={name} onChange={e=>onChangeField('name', e.target.value)} />
            <input className="input" style={{flex:1}} placeholder="Rolle (z.B. Protagonist)"
                   value={role} onChange={e=>onChangeField('role', e.target.value)} />
            <input className="input" style={{width:120}} placeholder="Alter"
                   value={age} onChange={e=>onChangeField('age', e.target.value)} />
          </div>

          <div className="panel" style={{marginTop:8}}>
            <textarea className="editor" placeholder="Beschreibung / Hintergrund …"
                      value={description} onChange={e=>onChangeField('description', e.target.value)} />
          </div>
        </section>
      </div>
    </main>
  )
}

```

### `frontend\src\pages\Dashboard.jsx`
```jsx
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  listProjects,
  createProject,
  updateProject,
  deleteProject
} from '../lib/api.js'
import logo from '../assets/brand/logo.png'
import '../dashboard.css'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [projects, setProjects] = useState([])

  const [newTitle, setNewTitle] = useState('')
  const [creating, setCreating] = useState(false)

  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const data = await listProjects()
        setProjects(data || [])
      } catch (e) {
        console.error(e); setError('Projekte konnten nicht geladen werden.')
      } finally { setLoading(false) }
    })()
  }, [])

  async function onCreate() {
    const title = (newTitle || '').trim() || 'Neues Projekt'
    setCreating(true)
    try {
      const p = await createProject({ title })
      setProjects(prev => [p, ...prev])
      setNewTitle('')
    } catch { alert('Projekt konnte nicht angelegt werden.') }
    finally { setCreating(false) }
  }

  async function onDelete(id) {
    if (!confirm('Projekt wirklich löschen?')) return
    try {
      await deleteProject(id)
      setProjects(prev => prev.filter(p => p.id !== id))
    } catch { alert('Löschen fehlgeschlagen.') }
  }

  function startEdit(p) {
    setEditingId(p.id)
    setEditTitle(p.title || '')
  }

  async function saveEdit(p) {
    const title = (editTitle || '').trim()
    setEditingId(null)
    if (!title || title === p.title) return
    try {
      const upd = await updateProject(p.id, { title })
      setProjects(prev => prev.map(x => x.id === p.id ? { ...x, ...upd } : x))
    } catch { alert('Umbenennen fehlgeschlagen.') }
  }

  function fmt(dt) {
    if (!dt) return '–'
    const d = new Date(dt)
    return d.toLocaleDateString() + ', ' + d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
  }

  if (loading) return <main className="content"><p>Lade…</p></main>

  return (
    <>
      {/* TOP NAV nur mit Logo */}
      <header className="topnav">
        <div className="topnav-inner">
          <div className="nav-left">
            <Link
              to="/"
              className="brand"
              aria-label="Roman"
              style={{ display:'inline-flex', alignItems:'center', padding:0, borderRadius:0, marginRight:12 }}
            >
              <img src={logo} alt="Roman" style={{ height:22, width:'auto', display:'block', borderRadius:0 }} />
            </Link>
          </div>

          <div className="nav-right">
            <div className="nav-search">
              <input
                placeholder="Titel"
                value={newTitle}
                onChange={e=>setNewTitle(e.target.value)}
              />
              <button className="btn primary" style={{marginLeft:8}} onClick={onCreate} disabled={creating}>
                {creating ? '…' : '➕ Neues Projekt'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <main className="content dashboard">
        <div className="page-head" style={{marginTop:8}}>
          <div className="page-crumbs"><h2 style={{margin:'0 0 2px 0'}}>Projekte</h2></div>
        </div>

        {error && <p style={{color:'crimson'}}>{error}</p>}

        <section className="proj-grid">
          {projects.map((p) => (
            <article key={p.id} className="proj-card">
              {/* Cover – 2:3 und klickbar */}
              <button
                className="cover"
                onClick={() => navigate(`/project/${p.id}`)}
                title="Öffnen"
              >
                <div className="cover-inner">
                  <span className="cover-mark">BUCH-COVER</span>
                </div>
              </button>

              {/* Inhalt der Kachel */}
              <div className="proj-meta">
                <div className="proj-header">
                  {editingId === p.id ? (
                    <input
                      className="title-input"
                      value={editTitle}
                      onChange={e=>setEditTitle(e.target.value)}
                      onKeyDown={(e)=>{ if (e.key==='Enter') saveEdit(p); if (e.key==='Escape') setEditingId(null) }}
                      onBlur={()=>saveEdit(p)}
                      autoFocus
                    />
                  ) : (
                    <h3
                      className="proj-title"
                      title={p.title || 'Unbenannt'}
                      onDoubleClick={()=>startEdit(p)}
                    >
                      {p.title || 'Unbenannt'}
                    </h3>
                  )}
                  <button className="icon-btn rename" title="Umbenennen" onClick={()=>startEdit(p)}>✎</button>
                </div>

                <div className="proj-sub">Zuletzt geändert: {fmt(p.updated_at)}</div>

                <div className="proj-actions">
                  <Link className="btn" to={`/project/${p.id}`}>Öffnen</Link>
                  <button className="btn" onClick={()=>onDelete(p.id)}>Löschen</button>
                </div>
              </div>
            </article>
          ))}

          {projects.length === 0 && (
            <div className="empty-hint">
              Noch keine Projekte – gib oben einen <em>Titel</em> ein und klicke <strong>„Neues Projekt“</strong>.
            </div>
          )}
        </section>
      </main>
    </>
  )
}

```

### `frontend\src\pages\Preview.jsx`
```jsx
import React, { useMemo, useRef } from 'react'
import { useParams } from 'react-router-dom'
import '../preview.css'

// kleine Helper
const escapeHtml = (s = '') =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

// Plaintext -> <p>…</p> (optional Dropcap im ersten Absatz)
function paragraphsHTML(text, firstIsDropcap = false) {
  const parts = (text || '')
    .split(/\n\s*\n/)
    .map(s => s.trim())
    .filter(Boolean)
  return parts
    .map((p, i) => {
      const cls = firstIsDropcap && i === 0 ? ' class="dropcap"' : ''
      return `<p${cls}>${escapeHtml(p).replace(/\n+/g, ' ')}</p>`
    })
    .join('\n')
}

// Kapitel-Heading ohne Dopplung „Kapitel …“
const chapterHeading = (no, title = '') => {
  const t = (title || '').trim()
  return /^kapitel\b/i.test(t) ? t : `Kapitel ${no}${t ? ' — ' + escapeHtml(t) : ''}`
}

export default function Preview() {
  const { id } = useParams()
  const pid = Number(id)
  const iframeRef = useRef(null)

  const [book, setBook] = React.useState(null)
  const [err, setErr] = React.useState('')

  React.useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(`/api/projects/${pid}/book`)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        setBook(await res.json())
      } catch (e) {
        console.error(e)
        setErr('Konnte Buchdaten nicht laden.')
      }
    })()
  }, [pid])

  // gesamtes Dokument für das Iframe bauen (Paged.js läuft isoliert darin)
  const srcDoc = useMemo(() => {
    if (!book)
      return '<!doctype html><html><head><meta charset="utf-8"></head><body>Loading…</body></html>'

    const { project, chapters } = book

    let chNo = 0
    const chaptersHTML = chapters
      .map(ch => {
        chNo += 1
        const scenes = ch.scenes || []
        // keine Szenen-Titel in der Vorschau – nur Inhalte
        const scenesHTML = scenes
          .map((sc, idx) => paragraphsHTML(sc.content || '', idx === 0))
          .join('\n')
        return `
          <section>
            <h1 class="chapter-title">${chapterHeading(chNo, ch.title || '')}</h1>
            ${scenesHTML}
          </section>
        `
      })
      .join('\n')

    return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Crimson+Pro:wght@400;600&display=swap" rel="stylesheet">
<style>
  :root{--book-font:"EB Garamond","Georgia",serif;--font-size:11pt;--lh:1.42;--zoom:1}
  html,body{margin:0;padding:0;background:#fff;overflow-x:hidden}
  .book{font-family:var(--book-font);font-size:var(--font-size);line-height:var(--lh);color:#111}

  /* 6×9" Taschenbuch mit angenehmen Rändern */
  @page{size:152.4mm 228.6mm;margin:20mm 18mm 24mm 18mm}
  @page{
    @top-center{content: string(running-chapter); font-family: var(--book-font); font-size:10pt; color:#444}
    @bottom-center{content: counter(page); font-family: var(--book-font); font-size:10pt; color:#444}
  }

  /* Typografie */
  h1.chapter-title{
    break-before: page;
    font-weight:600;font-size:18pt;text-align:center;margin:0 0 10mm;
    string-set: running-chapter content(text);
  }
  .book p{text-align:justify;margin:0 0 3.2mm;text-indent:1.2em;widows:2;orphans:2}
  .book h1 + p{ text-indent:0 }
  .dropcap:first-letter{ float:left;font-size:3.2em;line-height:0.8;padding-right:.1em }

  /* Seiten in der Bildschirmvorschau – automatisch an Breite anpassen */
  .pagedjs_pages{
    transform: scale(var(--zoom));
    transform-origin: top center;
  }
  /* Abstände bei Zoom anpassen, damit es hübsch bleibt */
  .pagedjs_page{box-shadow:0 10px 28px rgba(0,0,0,.10);margin: calc(16px / var(--zoom)) auto;border-radius:6px}
  .pagedjs_area, .pagedjs_pages { background: transparent !important; }
</style>

<script>
  // Paged.js automatisch starten
  window.PagedConfig = { auto: true };

  // Nach dem Rendern skalieren wir die Seiten so,
  // dass sie möglichst die verfügbare Breite nutzen (ohne Scrollbalken).
  function fitToWidth(){
    const first = document.querySelector('.pagedjs_page');
    if(!first) return;
    const margin = 32; // etwas Luft an den Seiten
    const viewport = window.innerWidth - margin;
    const pageWidth = first.getBoundingClientRect().width;
    if(!pageWidth) return;
    const desired = Math.min(1.8, Math.max(1.0, viewport / pageWidth));
    document.documentElement.style.setProperty('--zoom', desired.toFixed(2));
  }
  window.addEventListener('pagedjs:rendered', fitToWidth);
  window.addEventListener('resize', fitToWidth);
</script>
<script src="https://unpkg.com/pagedjs@0.4.3/dist/paged.polyfill.js"></script>
</head>
<body>
  <div class="book">
    <section style="break-before:page;text-align:center;margin-top:35mm">
      <h1 style="font-family:'EB Garamond',Georgia,serif;font-size:28pt;margin:0 0 3mm">
        ${escapeHtml(project?.title || 'Buch')}
      </h1>
      <div style="font-family:'Crimson Pro',Georgia,serif;font-size:12pt;color:#555">Roman – Vorschau</div>
    </section>
    ${chaptersHTML}
  </div>
</body>
</html>`
  }, [book])

  const printIframe = () => {
    const w = iframeRef.current?.contentWindow
    if (w) w.print()
  }

  if (err) {
    return (
      <main className="content content--fluid">
        
        <p>{err}</p>
      </main>
    )
  }

  return (
    <main className="content content--fluid">
     

      <div className="preview-toolbar">
        <strong>{book?.project?.title || 'Buch'}</strong>
        <button className="btn" onClick={printIframe}>Als PDF drucken</button>
      </div>

      {/* Große, volle Breite – zentriert dargestellt */}
      <div className="preview-wrap">
        <div className="preview-stage">
          <iframe
            ref={iframeRef}
            title="Book Preview"
            className="preview-frame"
            srcDoc={srcDoc}
          />
        </div>
      </div>
    </main>
  )
}

```

### `frontend\src\pages\ProjectView.jsx`
```jsx
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../layout-2col.css'
import '../projectview.css'

export default function ProjectView() {
  const { id } = useParams()
  const pid = Number(id)

  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')
  const [project, setProject]   = useState(null)
  const [chapters, setChapters] = useState([])

  const [activeChapterId, setActiveChapterId] = useState(null)
  const [activeSceneId, setActiveSceneId]     = useState(null)

  const [sceneTitle, setSceneTitle]     = useState('')
  const [sceneContent, setSceneContent] = useState('')

  const [query, setQuery] = useState('')

  const [saveState, setSaveState] = useState('idle')
  const [lastSavedAt, setLastSavedAt] = useState(null)

  const saveTimer = useRef(null)
  const textareaRef = useRef(null)
  const debounce = (fn) => { clearTimeout(saveTimer.current); saveTimer.current = setTimeout(fn, 600) }

  const postJSON = (url, body) => fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const putJSON  = (url, body) => fetch(url, { method:'PUT',  headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const del      = (url)      => fetch(url, { method:'DELETE' })

  const activeChapter = useMemo(
    () => chapters.find(c => c.id === activeChapterId) || null,
    [chapters, activeChapterId]
  )
  const activeScene = useMemo(
    () => (activeChapter?.scenes || []).find(s => s.id === activeSceneId) || null,
    [activeChapter, activeSceneId]
  )
  const inChapterOverview = !!activeChapter && !activeScene

  const metrics = useMemo(() => {
    const words = (sceneContent || '').trim().split(/\s+/).filter(Boolean).length
    const chars = (sceneContent || '').length
    const minutes = Math.max(1, Math.round(words / 200))
    return { words, chars, minutes }
  }, [sceneContent])

  const filteredChapters = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return chapters
    return chapters.filter(ch => {
      if ((ch.title || '').toLowerCase().includes(q)) return true
      return (ch.scenes || []).some(sc => (sc.title || '').toLowerCase().includes(q))
    })
  }, [chapters, query])

  // Szenen für Kapitel laden (Lazy)
  async function loadScenes(chId) {
    const ch = chapters.find(c => c.id === chId)
    if (ch && ch._loaded) return
    const res = await fetch(`/api/chapters/${chId}/scenes`)
    if (!res.ok) return
    const list = await res.json()
    setChapters(prev => prev.map(c => c.id === chId ? { ...c, scenes: list, _loaded: true } : c))
  }

  // Initial load
  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const res = await fetch(`/api/projects/${pid}`)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        const data = await res.json()
        setProject({ id: data.id, title: data.title })
        // Alle Kapitel initial "zu": scenes=[], _loaded:false
        const chs = (data.chapters || []).map(ch => ({ ...ch, scenes: [], _loaded: false }))
        setChapters(chs)
        const ch0 = chs[0]
        if (ch0) {
          setActiveChapterId(ch0.id)   // -> nur dieses klappt auf
          setActiveSceneId(null)
          await loadScenes(ch0.id)
        }
      } catch (e) { console.error(e); setError('Projekt konnte nicht geladen werden.') }
      finally { setLoading(false) }
    })()
  }, [pid])

  // Editor state setzen wenn Szene wechselt
  useEffect(() => {
    if (!activeScene) return
    setSceneTitle(activeScene.title || '')
    setSceneContent(activeScene.content || '')
    setSaveState('idle')
  }, [activeSceneId]) // eslint-disable-line

  // Flush-Save (für Navigationswechsel/Blur)
  const flushingRef = useRef(false)
  async function flushSceneSaveNow() {
    if (!activeSceneId || flushingRef.current) return
    clearTimeout(saveTimer.current)
    flushingRef.current = true
    try {
      setSaveState('saving')
      const res = await putJSON(`/api/scenes/${activeSceneId}`, { title: sceneTitle, content: sceneContent })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      setSaveState('saved'); setLastSavedAt(new Date())
    } catch (e) { console.error('Flush save failed:', e) }
    finally { flushingRef.current = false }
  }

  useEffect(() => {
    const onBeforeUnload = (e) => {
      if (activeSceneId) {
        flushSceneSaveNow()
        e.preventDefault()
        e.returnValue = ''
      }
    }
    const onVisibilityChange = () => { if (document.visibilityState === 'hidden') flushSceneSaveNow() }
    window.addEventListener('beforeunload', onBeforeUnload)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      flushSceneSaveNow()
    }
  }, [activeSceneId, sceneTitle, sceneContent])

  // Kapitel/Szenen – Navigation & CRUD
  async function goToChapterOverview(chId) {
    await flushSceneSaveNow()
    setActiveChapterId(chId)    // nur dieses öffnet
    setActiveSceneId(null)
    await loadScenes(chId)
  }
  async function openScene(chId, scId) {
    await loadScenes(chId)
    await flushSceneSaveNow()
    setActiveChapterId(chId)    // nur dieses öffnet
    setActiveSceneId(scId)
  }

  async function addChapter() {
    const title = `Kapitel ${chapters.length + 1}`
    const res = await postJSON(`/api/projects/${pid}/chapters`, { title })
    if (!res.ok) return alert('Kapitel konnte nicht angelegt werden.')
    const ch = await res.json()
    const newCh = { ...ch, scenes: [], _loaded: false }
    setChapters(prev => [...prev, newCh])
    await flushSceneSaveNow()
    setActiveChapterId(newCh.id)  // öffnet das neue Kapitel
    setActiveSceneId(null)
    setChapters(prev => prev.map(c => c.id === newCh.id ? { ...c, _loaded: true } : c))
  }
  async function removeChapter(chId) {
    if (!confirm('Kapitel wirklich löschen?')) return
    const res = await del(`/api/chapters/${chId}`)
    if (!res.ok) return alert('Löschen fehlgeschlagen.')
    setChapters(prev => prev.filter(c => c.id !== chId))
    if (activeChapterId === chId) {
      await flushSceneSaveNow()
      const first = chapters.find(c => c.id !== chId)
      setActiveChapterId(first?.id || null)
      setActiveSceneId(null)
      if (first) await loadScenes(first.id)
    }
  }
  async function renameChapter(chId, title) {
    setChapters(prev => prev.map(c => c.id === chId ? { ...c, title } : c))
    debounce(async () => { await putJSON(`/api/chapters/${chId}`, { title }) })
  }
  async function addScene(chId) {
    const res = await postJSON(`/api/chapters/${chId}/scenes`, { title:'Neue Szene', content:'' })
    if (!res.ok) return alert('Szene konnte nicht angelegt werden.')
    const sc = await res.json()
    setChapters(prev => prev.map(c => c.id === chId ? { ...c, scenes:[...c.scenes, sc], _loaded: true } : c))
    await flushSceneSaveNow()
    setActiveChapterId(chId)
    setActiveSceneId(sc.id)
  }
  async function removeScene(scId) {
    if (!confirm('Szene wirklich löschen?')) return
    const res = await del(`/api/scenes/${scId}`)
    if (!res.ok) return alert('Löschen fehlgeschlagen.')
    setChapters(prev => prev.map(c => ({ ...c, scenes:c.scenes.filter(s => s.id !== scId) })))
    if (activeSceneId === scId) setActiveSceneId(null)
  }

  function onChangeSceneTitle(e) {
    const val = e.target.value
    setSceneTitle(val)
    setSaveState('saving')
    setChapters(prev => prev.map(c => c.id !== activeChapterId ? c : ({
      ...c,
      scenes: c.scenes.map(s => s.id === activeSceneId ? { ...s, title: val } : s)
    })))
    debounce(async () => {
      await putJSON(`/api/scenes/${activeSceneId}`, { title: val })
      setSaveState('saved'); setLastSavedAt(new Date())
    })
  }
  function onChangeSceneContent(e) {
    const val = e.target.value
    setSceneContent(val)
    setSaveState('saving')
    setChapters(prev => prev.map(c => c.id !== activeChapterId ? c : ({
      ...c,
      scenes: c.scenes.map(s => s.id === activeSceneId ? { ...s, content: val } : s)
    })))
    debounce(async () => {
      await putJSON(`/api/scenes/${activeSceneId}`, { content: val })
      setSaveState('saved'); setLastSavedAt(new Date())
    })
  }

  function insertAroundSelection(prefix, suffix = prefix) {
    const ta = textareaRef.current; if (!ta) return
    const start = ta.selectionStart ?? 0
    const end   = ta.selectionEnd ?? 0
    const before = sceneContent.slice(0, start)
    const selected = sceneContent.slice(start, end)
    const after = sceneContent.slice(end)
    const next = before + prefix + selected + suffix + after
    setSceneContent(next)
    setSaveState('saving')
    debounce(async () => { await putJSON(`/api/scenes/${activeSceneId}`, { content: next }); setSaveState('saved'); setLastSavedAt(new Date()) })
    requestAnimationFrame(() => { ta.focus(); const pos = start + prefix.length + selected.length; ta.setSelectionRange(pos, pos) })
  }
  function insertLine(prefix) {
    const ta = textareaRef.current; if (!ta) return
    const start = ta.selectionStart ?? 0
    const before = sceneContent.slice(0, start)
    const after = sceneContent.slice(start)
    const nl = before.endsWith('\n') ? '' : '\n'
    const next = before + nl + prefix + '\n' + after
    setSceneContent(next)
    setSaveState('saving')
    debounce(async () => { await putJSON(`/api/scenes/${activeSceneId}`, { content: next }); setSaveState('saved'); setLastSavedAt(new Date()) })
    requestAnimationFrame(() => { ta.focus(); const pos = (before + nl + prefix + '\n').length; ta.setSelectionRange(pos, pos) })
  }

  function wordsOf(scene) {
    if (!scene?.content) return 0
    return scene.content.trim().split(/\s+/).filter(Boolean).length
  }
  function snippetOf(scene) {
    const txt = (scene?.content || '').replace(/\s+/g,' ').trim()
    return txt.length > 140 ? txt.slice(0, 140) + '…' : txt
  }

  if (loading) return <main className="content"><p>Lade…</p></main>
  if (error)   return <main className="content"><p>{error}</p></main>

  const sceneCount = activeChapter?.scenes?.length ?? 0

  return (
    <main className="content">

      {/* Kopf über beiden Spalten */}
      <div className="page-head">
        <div className="page-crumbs">
          <div className="crumb">{project?.title || 'Projekt'}</div>
          <span className="crumb sep">/</span>
          <div className="crumb strong">{activeChapter?.title || 'Kapitel'}</div>
        </div>
        <div className="page-meta">
          <span className="chip">{sceneCount} Szenen</span>
        </div>
      </div>

      <div className="two-col equalize">

        {/* LEFT: Kapitel-Liste */}
        <aside className="two-col__sidebar">
          <div className="panel fill">
            <div className="panel-title row" style={{justifyContent:'space-between'}}>
              <span>Kapitel</span>
              <div className="row" style={{gap:6}}>
                <div className="ksearch">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2"/></svg>
                  <input placeholder="Suchen…" value={query} onChange={e=>setQuery(e.target.value)} />
                </div>
                {/* Schönes Icon: ➕ */}
                <button className="btn xsm primary" onClick={addChapter}>➕ Neu</button>
              </div>
            </div>

            <ul className="chap-cards">
              {filteredChapters.map((ch, idx) => {
                const isActive = activeChapterId === ch.id
                const count = ch.scenes?.length || 0
                return (
                  <li key={ch.id} className={'chap-card' + (isActive ? ' active' : '')}>
                    <div
                      className="chap-head"
                      onClick={() => goToChapterOverview(ch.id)}
                    >
                      <div className="chap-meta">
                        <span className="chap-num">{String(idx + 1).padStart(2,'0')}</span>
                        <span className="chap-title-text" title={ch.title || 'Kapitel'}>{ch.title || 'Kapitel'}</span>
                      </div>
                      <div className="chap-actions">
                        <span className="scene-count">{count}</span>
                        <button className="icon-btn" title="Szene hinzufügen" onClick={(ev)=>{ev.stopPropagation(); addScene(ch.id)}}>＋</button>
                        <button className="icon-btn" title="Kapitel löschen" onClick={(ev)=>{ev.stopPropagation(); removeChapter(ch.id)}}>🗑</button>
                        {/* Auf/Zu-Button pro Kapitel entfernt */}
                      </div>
                    </div>

                    {/* Nur das aktive Kapitel klappt auf */}
                    {isActive && (
                      <ul className="scene-list">
                        {(ch.scenes || []).map(sc => (
                          <li key={sc.id} className={'scene-item' + (activeSceneId === sc.id ? ' current' : '')}>
                            <button className="scene-link" onClick={() => openScene(ch.id, sc.id)}>
                              <span className="dot" />
                              <span className="text">{sc.title || 'Neue Szene'}</span>
                            </button>
                            <button className="scene-del" title="Löschen" onClick={()=>removeScene(sc.id)}>🗑</button>
                          </li>
                        ))}
                        <li><button className="scene-add" onClick={() => addScene(ch.id)}>+ Neue Szene</button></li>
                      </ul>
                    )}
                  </li>
                )
              })}
              {filteredChapters.length === 0 && (
                <li className="empty-hint">Keine Treffer. Suchbegriff anpassen.</li>
              )}
            </ul>
          </div>
        </aside>

        {/* RIGHT: Übersicht ODER Editor */}
        <section className="two-col__main">
          <div className="stack fill">
            {inChapterOverview ? (
              <>
                <div className="panel">
                  <div className="panel-title row">
                    <span>Kapitel</span>
                    <span className="muted">ID {activeChapter?.id ?? '-'}</span>
                  </div>
                  <input
                    className="title-input"
                    placeholder="Kapitelname …"
                    value={activeChapter?.title || ''}
                    onChange={(e) => renameChapter(activeChapterId, e.target.value)}
                  />
                </div>

                <div className="panel">
                  <div className="panel-title row">
                    <span>Szenen in diesem Kapitel</span>
                    <button className="btn sm primary" onClick={() => addScene(activeChapterId)}>+ Neue Szene</button>
                  </div>

                  {(activeChapter?.scenes?.length || 0) === 0 ? (
                    <div className="empty-hint" style={{padding:'12px 0'}}>Noch keine Szenen. Lege die erste Szene an!</div>
                  ) : (
                    <ul className="scene-grid">
                      {activeChapter.scenes.map(sc => (
                        <li key={sc.id} className="scene-card">
                          <div className="scene-card-top">
                            <button className="scene-card-title" onClick={() => openScene(activeChapter.id, sc.id)}>
                              {sc.title || 'Neue Szene'}
                            </button>
                            <button className="icon-btn" title="Szene löschen" onClick={()=>removeScene(sc.id)}>🗑</button>
                          </div>
                          <p className="scene-card-snippet">{snippetOf(sc)}</p>
                          <div className="scene-card-meta">
                            <span className="chip">{wordsOf(sc)} Wörter</span>
                            <button className="btn xsm" onClick={() => openScene(activeChapter.id, sc.id)}>Öffnen</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="panel">
                  <div className="panel-title row">
                    <span>Szenentitel</span>
                    <span className="muted">Kapitel-ID {activeChapter?.id ?? '-'} · Szene-ID {activeScene?.id ?? '-'}</span>
                  </div>
                  <input
                    className="title-input"
                    placeholder="Titel der Szene …"
                    value={sceneTitle}
                    onChange={onChangeSceneTitle}
                  />
                </div>

                <div className="panel grow">
                  <div className="editor-toolbar">
                    <div className="tools-left">
                      <Tool onClick={() => insertAroundSelection('**')} label="Fett" icon="B" />
                      <Tool onClick={() => insertAroundSelection('_')} label="Kursiv" icon="I" />
                      <div className="tool-sep" />
                      <Tool onClick={() => insertLine('## Überschrift')} label="H2" icon="H2" />
                      <Tool onClick={() => insertLine('> Zitat')} label="Zitat" icon="❝" />
                      <Tool onClick={() => insertLine('- Liste')} label="Liste" icon="•" />
                    </div>
                    <div className="tools-right">
                      <SaveChip state={saveState} time={lastSavedAt} />
                      <span className="chip">{metrics.words} Wörter</span>
                      <span className="chip">{metrics.chars} Zeichen</span>
                      <span className="chip">⏱ {metrics.minutes} min</span>
                    </div>
                  </div>

                  <textarea
                    ref={textareaRef}
                    className="editor"
                    placeholder="Hier schreiben …"
                    value={sceneContent}
                    onChange={onChangeSceneContent}
                  />
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

/* ---------- kleine UI-Subkomponenten ---------- */
function Tool({ icon, label, onClick }) {
  return (
    <button className="tool-btn" onClick={onClick} title={label}>
      <span className="tool-ico">{icon}</span>
    </button>
  )
}
function SaveChip({ state, time }) {
  if (state === 'saving') return <span className="chip saving">Speichern…</span>
  if (state === 'saved')  return <span className="chip saved">Gespeichert · {time ? time.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) : ''}</span>
  return <span className="chip">Bereit</span>
}

```

### `frontend\src\pages\World.jsx`
```jsx
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../layout-2col.css'

export default function World() {
  const { id } = useParams()
  const pid = Number(id)

  const [project, setProject] = useState(null)
  const [places, setPlaces]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState('')

  const [activeId, setActiveId] = useState(null)

  const [name, setName]     = useState('')
  const [region, setRegion] = useState('')
  const [desc, setDesc]     = useState('')

  const saveTimer = useRef(null)
  const debounce = (fn) => { clearTimeout(saveTimer.current); saveTimer.current = setTimeout(fn, 500) }

  const active = useMemo(() => places.find(p => p.id === activeId) || null, [places, activeId])

  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const p = await (await fetch(`/api/projects/${pid}`)).json()
        setProject({ id: p.id, title: p.title })

        const res = await fetch(`/api/projects/${pid}/locations`)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        const data = await res.json()  // [{id,name,region,description}]
        setPlaces(data)
        const first = data[0]
        if (first) {
          setActiveId(first.id)
          setName(first.name || '')
          setRegion(first.region || '')
          setDesc(first.description || '')
        }
      } catch (e) { console.error(e); setError('Orte konnten nicht geladen werden.') }
      finally { setLoading(false) }
    })()
  }, [pid])

  useEffect(() => {
    if (!active) return
    setName(active.name || '')
    setRegion(active.region || '')
    setDesc(active.description || '')
  }, [activeId]) // eslint-disable-line

  const postJSON = (url, body) => fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const putJSON  = (url, body) => fetch(url, { method:'PUT',  headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const del      = (url)      => fetch(url, { method:'DELETE' })

  async function addPlace() {
    const res = await postJSON(`/api/projects/${pid}/locations`, { name:'Neuer Ort', region:'', description:'' })
    if (!res.ok) return alert('Anlegen fehlgeschlagen.')
    const p = await res.json()
    setPlaces(prev => [...prev, p])
    setActiveId(p.id)
  }

  async function removePlace(id) {
    if (!confirm('Ort wirklich löschen?')) return
    const res = await del(`/api/locations/${id}`)
    if (!res.ok) return alert('Löschen fehlgeschlagen.')
    setPlaces(prev => prev.filter(x => x.id !== id))
    if (activeId === id) {
      const first = places.find(x => x.id !== id)
      setActiveId(first?.id || null)
    }
  }

  function onChangeField(field, value) {
    if (field === 'name')     setName(value)
    if (field === 'region')   setRegion(value)
    if (field === 'desc')     setDesc(value)
    setPlaces(prev => prev.map(p => p.id === activeId ? { ...p, [field === 'desc' ? 'description' : field]: value } : p))
    debounce(async () => {
      await putJSON(`/api/locations/${activeId}`, {
        name, region, description: desc, [field === 'desc' ? 'description' : field]: value
      })
    })
  }

  if (loading) return <main className="content"><p>Lade…</p></main>
  if (error)   return <main className="content"><p>{error}</p></main>

  return (
    <main className="content">
      <div className="two-col">
        {/* LEFT: Orte-Liste */}
        <aside className="two-col__sidebar">
          <div className="panel">
            <div className="panel-title row">
              <span>Welt (Orte)</span>
              <button className="btn sm" onClick={addPlace}>+ Neu</button>
            </div>

            <ul className="klist">
              {places.map(p => (
                <li key={p.id} className="kitem">
                  <div
                    className={'krow ' + (activeId === p.id ? 'active' : '')}
                    onClick={() => setActiveId(p.id)}
                  >
                    <input className="kinput" value={p.name || ''} onChange={e => onChangeField('name', e.target.value)} />
                    <div className="kactions">
                      <button className="icon-btn" title="Löschen" onClick={(ev)=>{ev.stopPropagation(); removePlace(p.id)}}>🗑</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* RIGHT: Details */}
        <section className="two-col__main">
          <h3 style={{margin:'4px 0 8px 0'}}>{project?.title}</h3>

          <div className="row" style={{gap:8}}>
            <input className="input" style={{flex:1}} placeholder="Ort" value={name} onChange={e=>onChangeField('name', e.target.value)} />
            <input className="input" style={{flex:1}} placeholder="Region/Land" value={region} onChange={e=>onChangeField('region', e.target.value)} />
          </div>

          <div className="panel" style={{marginTop:8}}>
            <textarea className="editor" placeholder="Beschreibung, Geschichte, Kultur…" value={desc} onChange={e=>onChangeField('desc', e.target.value)} />
          </div>
        </section>
      </div>
    </main>
  )
}

```

### `frontend\src\preview.css`
```css
/* ===== Buchvorschau � �u�eres Layout (App-Seite) ===== */

/* volle Breite der App-Spalte nutzen */
.content--fluid {
  max-width: none;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
}

/* schlanke Toolbar */
.preview-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 8px 0 16px;
}

/* keine Karten-Box mehr */
.preview-wrap {
  background: transparent;
  border: 0;
  box-shadow: none;
  padding: 0;
  max-width: none;
}

/* B�hne f�r die Seiten � volle Breite, zentriert, weiches BG */
.preview-stage {
  height: calc(100vh - 140px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
  border-radius: 16px;
  background: linear-gradient(180deg, #f8f9fc 0%, #f3f4f8 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.7), 0 1px 2px rgba(0,0,0,.04);
  padding: 12px 16px;
}

/* gro�es, randloses Iframe � f�llt die B�hne */
.preview-frame {
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
}

/* Hinweis: die .pagedjs_page Schatten/Abst�nde werden im Iframe selbst gesetzt. */

```

### `frontend\src\projectview.css`
```css
/* ===== Zwei-Spalten-Layout für die Schreiben-Seite ===== */

.pv-grid {
  display: grid;
  grid-template-columns: 320px 1fr; /* Sidebar fix, rechts flexibel */
  gap: 16px;
  align-items: start;
}

/* Linke Spalte: sticky unter Header+Tabs */
.pv-sidebar {
  position: sticky;
  top: 116px;                     /* Header (~52px) + Tabs (~52px) + etwas Luft */
  max-height: calc(100vh - 140px);
  overflow: auto;
  padding-right: 4px;
}

/* Rechte Spalte füllt den Rest */
.pv-main {
  min-width: 0;                   /* verhindert Layoutsprünge bei langen Zeilen */
}

/* --- Kapitel-/Szenen-Liste (übernimmt deine vorhandenen Styles) --- */
.klist { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.kitem { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 6px; }
.krow { display: flex; align-items: center; gap: 8px; padding: 4px 6px; border-radius: 6px; }
.krow.active { background: #f3f4f6; }
.kinput { flex: 1; border: 1px solid #e5e7eb; border-radius: 6px; padding: 6px 8px; font: inherit; }
.kactions { display: flex; align-items: center; gap: 6px; }
.icon-btn { border: 1px solid #e5e7eb; background: #fff; border-radius: 6px; width: 28px; height: 28px; line-height: 26px; }
.icon-btn:hover { background: #f9fafb; }

.slist { list-style: none; margin: 4px 0 0; padding: 0 0 0 6px; display: flex; flex-direction: column; gap: 4px; }
.sbtn { border: 0; background: #f3f4f6; border-radius: 6px; padding: 6px 8px; cursor: pointer; }
.sbtn.active { background: #e5e7eb; font-weight: 600; }

.btn.xsm { padding: 4px 8px; font-size: 12px; }
.btn.ghost { background: transparent; border: 1px dashed #d1d5db; }
.btn.ghost:hover { background: #f9fafb; }

/* Responsiv: unter 980px stapeln wir auf eine Spalte */
@media (max-width: 980px) {
  .pv-grid { grid-template-columns: 1fr; }
  .pv-sidebar { position: static; max-height: none; overflow: visible; }

}


/* --- Seite Kopf über beiden Spalten --- */
.page-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  margin:8px 0 12px 0;
}
.page-crumbs{ display:flex; align-items:center; gap:8px; }
.page-crumbs .crumb{ font-weight:500; }
.page-crumbs .crumb.strong{ font-weight:700; }
.page-crumbs .sep{ opacity:.5; }
.page-meta .chip{ margin-left:auto; }

/* --- Gleich hohe Spalten --- */
.two-col.equalize{
  display:grid;
  grid-template-columns: 360px 1fr;
  gap:16px;
  align-items:stretch; /* <- beide Spalten gleiche Höhe */
  min-height: calc(100vh - 180px); /* optisch volle Höhe */
}
.two-col__sidebar, .two-col__main{ display:flex; flex-direction:column; }
.panel.fill{ height:100%; display:flex; flex-direction:column; }
.stack.fill{ min-height:100%; display:flex; flex-direction:column; gap:12px; }
.panel.grow{ flex:1 1 auto; display:flex; flex-direction:column; }
.editor{ flex:1 1 auto; min-height:280px; }

/* 1) Seitenkopf & Toolbar sticky + Blur */
.page-head {
  position: sticky; top: 56px; /* unter deiner Topnav */
  z-index: 5; backdrop-filter: saturate(120%) blur(6px);
  background: color-mix(in srgb, var(--bg, #f6f8fb) 80%, white 20%);
  border-bottom: 1px solid rgba(0,0,0,.04);
  padding: 8px 0; margin: 0 0 12px 0;
}

/* 2) Gleich hohe Spalten + Scroll-Schatten für die linke Liste */
.two-col.equalize { align-items: stretch; }
.two-col__sidebar .panel.fill {
  overflow: auto; /* eigener Scroll */
  box-shadow: inset 0 6px 6px -6px rgba(0,0,0,.05),
              inset 0 -6px 6px -6px rgba(0,0,0,.05);
}

/* 3) Kapitelkarte: kompakter, Actions nur bei Hover */
.chap-card { transition: transform .08s ease; }
.chap-card:hover { transform: translateY(-1px); }
.chap-head { padding: 10px 12px; }
.chap-actions .icon-btn { opacity: 0; transform: translateY(-2px); transition: .12s; }
.chap-card:hover .chap-actions .icon-btn { opacity: 1; transform: translateY(0); }

/* 4) Szenenliste im Kapitel links: pills wie „Subitems“ */
.scene-list { padding: 6px 8px 10px; gap: 6px; }
.scene-item .scene-link { gap: 8px; }
.scene-item.current .scene-link .text { font-weight: 600; }

/* 5) Kartenraster rechts: auto-fit, gleich hohe Karten */
.scene-grid {
  display: grid; gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
.scene-card { display: flex; flex-direction: column; min-height: 150px; }
.scene-card-top { align-items: start; }
.scene-card-snippet { flex: 1 1 auto; }
.scene-card .scene-card-meta { display: flex; justify-content: space-between; align-items: center; }

/* 6) Editor: Toolbar sticky & angenehmer Zeilenabstand */
.editor-toolbar {
  position: sticky; top: 104px; z-index: 4;
  backdrop-filter: blur(6px);
  background: color-mix(in srgb, white 70%, transparent);
  border-bottom: 1px solid rgba(0,0,0,.06);
}
.editor { line-height: 1.7; font-size: 16px; }

/* 7) Chips & Badges – etwas ruhiger */
.chip { background: #eef2ff; color: #3b5bfd; border: 0; }
.chip.saving { background: #fff3cd; color: #c27b00; }
.chip.saved  { background: #eafaf0; color: #17803d; }

/* 8) Buttons: konsistente Höhe + Icon-Abstand */
.btn, .btn.sm, .btn.xsm { gap: 6px; }
.btn.primary { box-shadow: 0 6px 12px -6px rgba(59,91,253,.25); }

/* 9) Scrollbar subtil (Chromium/Safari) */
.panel.fill::-webkit-scrollbar { height: 8px; width: 8px; }
.panel.fill::-webkit-scrollbar-thumb { background: rgba(0,0,0,.12); border-radius: 8px; }

/* 10) Fokus sichtbar aber weich */
:focus-visible { outline: 2px solid #7aa2ff; outline-offset: 2px; border-radius: 8px; }

```

### `frontend\src\styles.css`
```css
/* ===================== THEME ===================== */
:root{
  --bg: #f5f7fb;
  --text: #0f172a;
  --muted: #64748b;

  --surface: #ffffff;
  --surface-2: #f8fafc;
  --border: #e5e7eb;
  --hover: #eef2f7;

  --primary: #2563eb;
  --primary-600: #1d4ed8;
  --accent: #22c55e;
  --ring: rgba(37,99,235,.22);

  --radius: 14px;

  --topnav-h: 64px;
  --content-w: 1280px;

  --sticky-offset: calc(var(--topnav-h) + 14px);
}

*{box-sizing:border-box;}
html,body{height:100%}
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
  line-height: 1.45;
}

.content{ max-width: var(--content-w); padding: 14px 20px 28px; margin: 0 auto; }
.row{ display:flex; align-items:center; gap:10px; }

/* ===================== TOP NAV ===================== */
.topnav{
  position: sticky; top: 0; z-index: 100;
  height: var(--topnav-h);
  background: #0b1220; color:#e5e7eb;
  border-bottom: 1px solid #0f172a;
  box-shadow: 0 4px 20px rgba(2,6,23,.18);
}
.topnav-inner{ height:100%; max-width: var(--content-w); margin:0 auto; display:flex; align-items:center; justify-content:space-between; padding:0 20px; }
.brand{ display:flex; align-items:center; gap:10px; }
.brand-logo{ width:16px; height:16px; display:grid; place-items:center; background:#16a34a; color:#0b1220; border-radius:4px; font-size:10px; font-weight:800; }
.brand-name{ color:#fff; font-weight:700; letter-spacing:.2px; }
.nav-left{ display:flex; align-items:center; gap:14px; }
.nav-links{ display:flex; align-items:center; gap:6px; }
.nav-link{ position:relative; display:flex; align-items:center; gap:8px; height:36px; padding:0 12px; color:#cbd5e1; text-decoration:none; border-radius:10px; transition: background .15s ease, color .15s ease; }
.nav-link:hover{ background: rgba(255,255,255,.06); color:#fff; }
.nav-link.active{ color:#fff; }
.nav-link .nav-ico{ width:18px; height:18px; opacity:.95; }
.nav-link .active-bar{ content:''; position:absolute; left:10px; right:10px; bottom:-8px; height:3px; background: var(--accent); border-radius:99px; transform: scaleX(0); transition: transform .18s ease; }
.nav-link.active .active-bar{ transform: scaleX(1); }

.nav-right{ display:flex; align-items:center; gap:8px; }
.nav-search{ display:flex; align-items:center; gap:6px; height:34px; padding:0 10px; border-radius:10px; background: rgba(255,255,255,.06); color:#e5e7eb; border:1px solid rgba(255,255,255,.08); }
.nav-search input{ width:180px; border:0; outline:0; background:transparent; color:#e5e7eb; font:inherit; }
.nav-search input::placeholder{ color:#94a3b8; }
.icon-btn{ width:32px; height:32px; display:inline-flex; align-items:center; justify-content:center; border-radius:10px; background: rgba(255,255,255,.06); color:#e5e7eb; border:1px solid rgba(255,255,255,.08); cursor:pointer; }
.icon-btn:hover{ background: rgba(255,255,255,.12); }
.nav-user{ display:flex; align-items:center; gap:8px; padding-left:4px; color:#e5e7eb; }
.avatar{ width:28px; height:28px; border-radius:999px; background:#1f2937; display:grid; place-items:center; color:#cbd5e1; font-weight:700; }
.uname{ font-size:14px; color:#e5e7eb; }

/* ===================== BASICS ===================== */
.btn{ display:inline-flex; align-items:center; justify-content:center; height:34px; padding:0 12px; background:#fff; color:#111; border:1px solid var(--border); border-radius:10px; cursor:pointer; transition: background .15s ease, border-color .15s ease, box-shadow .15s ease; }
.btn:hover{ background: var(--hover); }
.btn.primary{ background: var(--primary); color:#fff; border-color: var(--primary); }
.btn.primary:hover{ background: var(--primary-600); }
.btn.sm{ height:30px; padding:0 10px; font-size:14px; }
.btn.xsm{ height:26px; padding:0 8px; font-size:12px; }
.btn.ghost{ background: transparent; border-style: dashed; }
.input, input[type="text"], input[type="number"], textarea{ width:100%; border:1px solid var(--border); background:#fff; color:var(--text); border-radius:10px; padding:8px 10px; font:inherit; outline:none; transition: border-color .15s ease, box-shadow .15s ease; }
.input::placeholder, textarea::placeholder{ color:#94a3b8; }
.input:focus, textarea:focus{ border-color: var(--primary); box-shadow: 0 0 0 4px var(--ring); }

.panel{ background: var(--surface); border:1px solid var(--border); border-radius: var(--radius); padding:10px; box-shadow: 0 1px 0 rgba(255,255,255,.9), 0 8px 30px rgba(15,23,42,.06); }
.panel + .panel{ margin-top: 10px; }
.panel-title{ display:flex; align-items:center; justify-content:space-between; padding:6px 4px 8px; border-bottom:1px solid var(--border); margin-bottom:8px; font-weight:600; }

.editor{ width:100%; min-height:500px; resize:vertical; border-radius:12px; padding:12px 14px; line-height:1.55; font-size:15px; }
.editor-head{ margin:6px 0 10px; }
.crumb{ color: var(--muted); font-size:14px; }
.crumb.strong{ color: var(--text); font-weight:600; }
.crumb.sep{ opacity:.6; }

.title-input{ width:100%; border:1px solid var(--border); background:#fff; border-radius:12px; padding:10px 14px; font-size:18px; font-weight:600; }
.title-input::placeholder{ color:#94a3b8; }

.editor-toolbar{ display:flex; align-items:center; justify-content:space-between; gap:10px; padding:6px 6px 10px; margin:-6px -6px 8px; border-bottom:1px solid var(--border); }
.tools-left{ display:flex; align-items:center; gap:4px; }
.tools-right{ display:flex; align-items:center; gap:10px; color: var(--muted); font-size:13px; }
.tool-btn{ height:30px; padding:0 10px; border-radius:9px; border:1px solid var(--border); background:#fff; cursor:pointer; }
.tool-btn:hover{ background: var(--hover); }
.tool-ico{ font-weight:700; font-size:13px; }
.tool-sep{ width:1px; height:22px; background: var(--border); margin:0 4px; }
.muted{ color: var(--muted); }
.dot{ width:4px; height:4px; background:#cbd5e1; border-radius:999px; display:inline-block; }

.chip{ display:inline-flex; align-items:center; padding:2px 8px; border-radius:999px; font-size:12px; color:#334155; background:#eef2ff; border:1px solid #e0e7ff; }
.chip.saving{ background:#fff7ed; border-color:#fed7aa; color:#9a3412; }
.chip.saved{ background:#ecfdf5; border-color:#a7f3d0; color:#065f46; }

/* ===================== Kapitel-Liste (links) ===================== */
.chapter-panel .panel-title .ksearch{
  display:flex; align-items:center; gap:6px; height:30px; padding:0 10px; border:1px solid var(--border);
  border-radius:8px; background:#fff; color:#64748b;
}
.ksearch input{ border:0; outline:0; background:transparent; width:140px; font:inherit; color: var(--text); }
.ksearch input::placeholder{ color:#94a3b8; }

.chap-cards{ list-style:none; margin:8px 0 0; padding:0; display:flex; flex-direction:column; gap:10px; }
.chap-card{
  border:1px solid var(--border); background:#fff; border-radius:12px; padding:8px;
  box-shadow: 0 1px 0 rgba(255,255,255,.9), 0 4px 16px rgba(15,23,42,.04);
}
.chap-card.active{ outline: 2px solid rgba(37,99,235,.20); }

.chap-head{ display:flex; align-items:center; justify-content:space-between; gap:8px; padding:2px 2px 6px; cursor:pointer; user-select:none; }
.chap-meta{ display:flex; align-items:center; gap:10px; min-width:0; }
.chap-num{
  width:26px; height:26px; border-radius:8px; background:#eef2ff; border:1px solid #e0e7ff;
  display:grid; place-items:center; font-size:12px; color:#334155; font-weight:700;
}
.chap-title-text{ font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }

.chap-actions{ display:flex; align-items:center; gap:6px; }
.scene-count{
  min-width:24px; height:24px; border-radius:999px; background:#f1f5f9; border:1px solid #e2e8f0;
  display:grid; place-items:center; font-size:12px; color:#475569;
}
.collapse-btn{ width:26px; height:26px; border-radius:8px; border:1px solid var(--border); background:#fff; cursor:pointer; transform: rotate(0deg); }
.collapse-btn.is-collapsed{ transform: rotate(-90deg); }

.scene-list{ list-style:none; margin:6px 0 0; padding:4px 2px 2px 2px; display:flex; flex-direction:column; gap:6px; border-top:1px dashed var(--border); }
.scene-item{ display:flex; align-items:center; justify-content:space-between; gap:6px; padding:4px 6px; border-radius:8px; background:#f8fafc; border:1px solid #eef2f7; }
.scene-item.current{ background:#eef2ff; border-color:#e0e7ff; }
.scene-link{ display:flex; align-items:center; gap:8px; background:transparent; border:0; cursor:pointer; text-align:left; flex:1; }
.scene-link .dot{ width:6px; height:6px; background:#94a3b8; }
.scene-item.current .dot{ background:#2563eb; }
.scene-link .text{ overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.scene-del{ visibility:hidden; background:#fff; border:1px solid var(--border); border-radius:6px; width:26px; height:26px; cursor:pointer; }
.scene-item:hover .scene-del{ visibility:visible; }
.scene-add{ width:100%; text-align:center; background:#fff; border:1px dashed var(--border); border-radius:8px; padding:6px 8px; cursor:pointer; }
.scene-add:hover{ background:#f9fafb; }

/* ===================== Kapitel-�bersicht (rechts) ===================== */
.scene-grid{
  list-style:none; margin:8px 0 0; padding:0;
  display:grid; gap:12px;
  grid-template-columns: repeat( auto-fill, minmax(260px, 1fr) );
}
.scene-card{
  border:1px solid var(--border); background:#fff; border-radius:12px; padding:10px;
  display:flex; flex-direction:column; gap:8px;
  box-shadow: 0 1px 0 rgba(255,255,255,.9), 0 6px 18px rgba(15,23,42,.06);
}
.scene-card-top{ display:flex; align-items:center; justify-content:space-between; }
.scene-card-title{
  background:transparent; border:0; padding:0; cursor:pointer;
  font-weight:700; text-align:left;
}
.scene-card-snippet{ margin:0; color: var(--muted); font-size:14px; line-height:1.45; min-height: 42px; }
.scene-card-meta{ display:flex; align-items:center; justify-content:space-between; }

/* Responsive */
@media (max-width: 980px){
  .content { padding-left:14px; padding-right:14px; }
  .nav-search input{ width:120px; }
  .editor-toolbar{ flex-direction:column; align-items:flex-start; }
  .ksearch input{ width:110px; }
}

```

### `frontend\src\ui\AppHeader.jsx`
```jsx
import React from 'react'

export default function AppHeader() {
  return (
    <>
      <div className="brand">Roman Writing MVP</div>
      <div className="header-actions">
        <a className="link-muted" href="#" title="Docs">Docs</a>
      </div>
    </>
  )
}

```

### `frontend\src\ui\Editor.jsx`
```jsx
import React from 'react'

export default function Editor({ value, onChange }) {
  return (
    <textarea
      className="textarea"
      style={{minHeight: '60vh', lineHeight: '1.6'}}
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      placeholder="Hier schreiben... (MVP: einfacher Texteditor)"
    />
  )
}

```

### `frontend\src\ui\ProjectNav.jsx`
```jsx
import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

export default function ProjectNav() {
  const { id } = useParams()
  const { pathname } = useLocation()
  const base = `/project/${id}`
  const tabs = [
    { to: base, label: 'Schreiben' },
    { to: `${base}/characters`, label: 'Charaktere' },
    { to: `${base}/world`, label: 'Welt' },
    { to: `${base}/preview`, label: 'Vorschau' },  
  ]
  return (
    <div className="tabs">
      {tabs.map(t => (
        <Link key={t.to} className={`tab ${pathname === t.to ? 'active' : ''}`} to={t.to}>
          {t.label}
        </Link>
      ))}
    </div>
  )
}

```

### `frontend\vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true
      }
    }
  }
})

```

### `make-snapshot.ps1`
```powershell
param(
  [string]$OutFile = "code-snapshot.md",
  [int]$MaxKB = 150
)

$root = Get-Location
$project = Split-Path -Leaf $root

function WriteLine($text="") {
  $text | Out-File -FilePath $OutFile -Append -Encoding utf8
}

function IsExcludedFile($path) {
  $name = [System.IO.Path]::GetFileName($path)
  $ext  = [System.IO.Path]::GetExtension($path).ToLowerInvariant()

  $excludeDirs  = @('node_modules','.git','dist','build','.venv','venv','__pycache__','.idea','.vscode','coverage','.cache','.next','.turbo')
  $excludeFiles = @('package-lock.json','yarn.lock','pnpm-lock.yaml','app.db','*.sqlite','*.sqlite3','.env*','*.png','*.jpg','*.jpeg','*.gif','*.webp','*.ico','*.pdf','*.ttf','*.otf','*.woff','*.woff2','*.zip')

  foreach($d in $excludeDirs)  { if ($path -like "*\$d\*") { return $true } }
  foreach($f in $excludeFiles) { if ($name -like $f)      { return $true } }

  $whitelistExt = @('.js','.jsx','.ts','.tsx','.json','.css','.scss','.md','.yml','.yaml','.html','.py','.txt','.sql','.ini','.toml','.cfg','.conf','.bat','.ps1')
  if ($whitelistExt -notcontains $ext) { return $true }

  return $false
}

$map = @{
  '.js'='javascript'; '.jsx'='jsx'; '.ts'='ts'; '.tsx'='tsx'; '.json'='json';
  '.css'='css'; '.scss'='scss'; '.md'='markdown'; '.yml'='yaml'; '.yaml'='yaml';
  '.html'='html'; '.py'='python'; '.txt'='text'; '.sql'='sql'; '.ini'='ini';
  '.bat'='bat'; '.ps1'='powershell'; '.toml'='toml'; '.cfg'='ini'; '.conf'='ini'
}

# Header
$header = "<!-- Generated " + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss') + " -->`n# " + $project + " - Code Snapshot`n"
Set-Content -Path $OutFile -Value $header -Encoding utf8

WriteLine "## Projektstruktur"
WriteLine '```'
$tree = & cmd /c "tree /F /A"
WriteLine $tree
WriteLine '```'
WriteLine ""

WriteLine "## Dateien"
WriteLine ""

Get-ChildItem -Recurse -File | Sort-Object FullName | ForEach-Object {
  $full = $_.FullName
  if (IsExcludedFile $full) { return }

  $rel   = $full.Substring($root.Path.Length + 1)
  $ext   = [System.IO.Path]::GetExtension($full).ToLowerInvariant()
  $lang  = $map[$ext]; if (-not $lang) { $lang = "" }
  $sizeKB = [int][math]::Ceiling($_.Length / 1KB)

  # Inline-Code: zwei Backticks schreiben einen echten Backtick
  WriteLine ("### ``" + $rel + "``")

  if ($sizeKB -gt $MaxKB) {
    WriteLine ("_Datei groesser als " + $MaxKB + " KB, ausgelassen._")
    WriteLine ""
  } else {
    WriteLine ('```' + $lang)
    Get-Content -Raw -Encoding utf8 $full | Out-File -FilePath $OutFile -Append -Encoding utf8
    WriteLine '```'
    WriteLine ""
  }
}

Write-Host ("Fertig: " + $OutFile)

```

### `README.md`
```markdown
# Roman Writing MVP (ohne KI)

Minimaler Prototyp zum Schreiben und Organisieren von Romanen.

## Schnellstart
1. **Backend starten**
```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
API: http://127.0.0.1:5000

2. **Frontend starten (neues Terminal)**
```powershell
cd frontend
npm install
npm run dev
```
Frontend: http://127.0.0.1:5173

## Features
- Projekte anlegen, umbenennen, löschen
- Kapitel erstellen, auswählen, löschen
- Einfacher Texteditor mit Autosave (Debounce)
- SQLite-Datenbank (Datei: `backend/app.db`)
- Vite-Proxy `/api` → Flask (kein CORS-Ärger)

## Nächste Schritte
- Charaktere & Orte als Tabs in der Projektansicht
- Markdown-Preview
- Export als `.md` oder `.docx`
- Reorder per Drag&Drop

```

